import { Request, Response, Router } from "express";
import User from "../../models/user";

class GetUser {

    async getOneUser(req: Request, res: Response) {
        try {
          
          const user = await User.find();
          const userId = req.params.id;
          console.log(userId)
          res.json(user);
        } catch (error) {
          console.log(error);
        }
      }
}

const getUser = new GetUser();

export default getUser;