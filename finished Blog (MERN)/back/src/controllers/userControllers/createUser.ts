import { Request, Response, NextFunction, Router } from "express";
import User, { IUser } from "../../models/user";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');


class CreateUser {
  createUser(req: Request, res: Response,error:any) {
    User.find({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user.length >= 1) {
          return res.status(409).send({ message: " mail arleady exists" });
        } else {
          bcrypt.hash(req.body.password, 10, (error: any, hash: any) => {
            if (error) {
              return res.status(500).send({ error: error });
            } else {
              const user: IUser = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
                name: req.body.name,
                admin:req.body.admin
              });
              
              user
                .save()
                .then((result) => {
                  
                  
                  res.status(200).json({ message: "user created", result });
                })
                .catch((error) => {
                  console.log(error);
                  res.status(401).send({ message: 'invalid email' });
                });
            }
          });
        }
      })
      .catch((error)=>{
        res.status(402).send({ message: error });
      });
  }
}
const createUser = new CreateUser();
export default createUser;
