import { Router } from 'express';
import commandCtrl from './command.ctrl';
import { http404Handler, htpp500Handler } from '../../middlewares';

const router = Router();
router.use('/api/v1', commandCtrl);
router.use(http404Handler());
router.use(htpp500Handler());

export default router;
