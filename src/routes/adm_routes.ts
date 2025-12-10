import {Router} from 'express'
import { show_adm } from '../controller/adm_cintroller';
import { authMiddlewares } from '../middlewares/authMiddlewares';
import { show_users } from '../controller/user_controller';

const admRoutes = Router();

admRoutes.get('/adm', authMiddlewares, show_adm);
admRoutes.get('/adm/users', authMiddlewares, show_users);
export {
    admRoutes
}