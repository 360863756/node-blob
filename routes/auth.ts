import authExpress from "express"
import authController from "../service/authService"

const authRouter = authExpress.Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/getUserList', authController.getUserList);

export default authRouter;