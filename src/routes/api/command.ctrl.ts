import { Router, Request, Response, NextFunction } from 'express';
import { v1 } from 'uuid';

export class CommandRouter {
  public router: Router;

  constructor() {
    this.init();
  }

  public init(): void {
    this.router = Router();
    this.router.post('/commands/call', this.call);
  }

  public call(req: Request, res: Response, next: NextFunction) {
    res.send({
      response_type: 'in_channel',
      text: 'Lets do a call',
      attachments: [
        {
          text: `https://meet.jit.si/${req.body.text ? req.body.text : v1()}`,
        },
      ],
    });
  }
}

export default new CommandRouter().router;
