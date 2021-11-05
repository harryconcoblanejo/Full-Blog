import { Request, Response, NextFunction, Router } from "express";
import User, { IUser } from "../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');


// interface IncomingHttpHeaders {
   
//   'authorization'?: string;
  
//   [header: string]: string | string[] | undefined;
// }


class LoginUser {
  login(req: Request, res: Response) {
    User.find({ email: req.body.email, name: req.body.name})
      
      .exec()
      .then((user) => {
       const userId = user[0]._id
       localStorage.setItem('userId',userId)
       
        if (user.length < 1) {
          return res.status(401).json({ message: "auth fail" });
        }

        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({ message: "auth fail" });
          }
          if (result) {
            
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id,
              },
              process.env.JWT_KEY!,
              {
                expiresIn: "90d",
              }
              
            );
            
            return res.json({ message: "auth succesfully", token: token,userId});
            
            
          }
          
          res.status(401).json({ message: "auth fail", result });
        });
      })
      .catch((err) => {
        console.log('el pto error es este!' + err);
        res.status(501).json({ error: err + 'daleeeeeeeeeee' });
      });
  }
}

const loginUser = new LoginUser();
export default loginUser;
