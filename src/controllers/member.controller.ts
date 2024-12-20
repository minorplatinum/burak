import { Request, Response } from "express";

import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";
const memberService = new MemberService();
const memberController: T = {};

//REACT

// memberController.goHome = (req: Request, res: Response) => {
//   try {
//     res.send("Welcome to HomePage");
//   } catch (err) {
//     console.log("Error: goHome", err);
//   }
// };

// memberController.getLogin = (req: Request, res: Response) => {
//   try {
//     res.send("Welcome to getLogin");
//   } catch (err) {
//     console.log("Error: getLogin", err);
//   }
// };

// memberController.getSignUp = (req: Request, res: Response) => {
//   try {
//     res.send("Welcome to getSignUp");
//   } catch (err) {
//     console.log("Error: getSignUp", err);
//   }
// };

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    //TODO: TOKENS AUTHENTICATION
    res.json({ member: result });
  } catch (err) {
    console.log("Error: signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login"); // shu joygacha bo'lgan mantiqda xato
    //bo'lgan bo'lmaganini tekshirish uchun
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //TODO: TOKENS AUTHENTICATION
    res.json({ member: result });
  } catch (err) {
    console.log("Error: login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;