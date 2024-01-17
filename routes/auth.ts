import { Post, Controller, Req, Res, Get } from "routing-controllers";
import { LOGIN, LoginInterface } from "service/authService";
import { Inject, Service } from "typedi";
import { Request, Response } from 'express';

@Controller()
@Service()
export class loginController{
    @Inject(LOGIN) private readonly user: LoginInterface;

    @Post("/auth/register")
    register(@Req() req: Request,@Res() res: Response){
        this.user.register(req, res)
    }

    @Post("/auth/login")
    login(@Req() req: Request,@Res() res: Response){
        this.user.login(req, res)
    }

    @Get("/auth/getUserList")
    getUserList(@Req() req: Request,@Res() res: Response){
        this.user.getUserList(req, res)
    }
}