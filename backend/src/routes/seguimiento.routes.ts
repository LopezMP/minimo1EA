import {Router} from "express"; 
import seguimientoController from '../controllers/seguimiento.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

router.get('/all', seguimientoController.getSeguimientos);
router.post('/create', seguimientoController.createSeguimiento);
router.delete('/:id', seguimientoController.deleteSeguimiento)

//Exportamos router para usar rutas en app.ts
export default router;