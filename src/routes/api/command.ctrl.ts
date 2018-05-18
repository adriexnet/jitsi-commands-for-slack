import { Router, Request, Response, NextFunction } from 'express';

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
          text: '`https://meet.jit.si/adsa`',
        },
      ],
    });
  }
}

export default new CommandRouter().router;
