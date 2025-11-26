import {Router} from 'express'
import { show_adm } from '../controller/adm_cintroller';
import { authMiddlewares } from '../middlewares/authMiddlewares';

const admRoutes = Router();

admRoutes.get('/adm', authMiddlewares, show_adm);

export {
    admRoutes
}