import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import routes from './routes';
import morgan from './middlewares/morgan';
import { logger } from './libs';

export class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(morgan);
  }

  private routes(): void {
    routes.forEach((router) => {
      this.express.use('/', router);
    });
  }

  public start(): void {
    this.express.listen(
      process.env.SERVER_PORT,
      () => logger.info(`listening on port ${process.env.SERVER_PORT}!`),
    );
  }

}

export default new App();
