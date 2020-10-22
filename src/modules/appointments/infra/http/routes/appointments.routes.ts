import { Router } from 'express';
import AppointmentController from '@modules/appointments/infra/http/controllers/AppointmentController';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentController();

appointmentsRouter.post('/', appointmentsController.create);

appointmentsRouter.use(ensureAuthenticaded);

export default appointmentsRouter;
