const authExpress = require('express');
const authRouter = authExpress.Router();
const authController = require('../service/authService');

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/getUserList', authController.getUserList);

module.exports = authRouter;