import {Router} from 'express'
import { show_adm } from '../controller/adm_cintroller';

const admRoutes = Router();

admRoutes.get('/adm', show_adm);

export {
    admRoutes
}