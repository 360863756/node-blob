import { Request, Response } from 'express';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"

import type {IReturnMessage} from "./types"
import { Service } from 'typedi';

export const LOGIN = "login";

export interface LoginInterface {
  register(req: Request, res: Response): void;
  login(req: Request, res: Response): void;
  getUserList(req: Request, res: Response): void;
}

@Service(LOGIN)
export class Login implements LoginInterface {
  // 注册
  async register(req: Request, res: Response) {
    const { username, password, nickname } = req.body;

    try {
      const existingUser = await User.findOne({ where: { username } });
        
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ username, password: hashedPassword, nickname });
      const resMessage : IReturnMessage<string> = { data: "User registered successfully", no: 0 }
      res.status(201).json(resMessage);
    } catch (error) {
      const resMessage : IReturnMessage<string> = { data: "Failed to register user", no: 1 }
      res.status(500).json(resMessage);
    }
  }

  // 登录
  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ msg: "Invalid username or password" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ msg: "Invalid username or password" });
      }

      user.lastOnlineTime = new Date();
      await user.save();

      const token = jwt.sign({ userId: user.id }, "xxx-your-secret-key", {
        expiresIn: "24h",
      });

      res.json({ token, account: user.username, nickname: user.nickname, userId: user.id});
    } catch (error) {
      res.status(500).json({ msg: "Failed to log in" });
    }
  }

  async getUserList(req: Request, res: Response){
    try {
      const userList = await User.findAll({
        attributes: ['username', 'password', 'nickname']
      });
      const resMessage : IReturnMessage<User[]> = { data: userList, no: 0 }
      res.json(resMessage);
    } catch (error) {
      const resMessage : IReturnMessage<string> = { data: "Failed", no: 1 }
      res.status(500).json(resMessage);
    }
  }
}