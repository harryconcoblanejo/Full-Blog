import { Request, Response, NextFunction, Router } from "express";
import User, { IUser } from "../../models/user";
import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage('./scratch');
class DeleteUser {
  deleteUser(req: Request, res: Response) {
    // User.deleteOne({ _id: req.params.userId })
    //   .exec()
    //   .then((result) => {
    //     res.status(200).send({ mesaage: "user deleted" });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(500).json({ error: err });
    //   });
      localStorage.removeItem('my token')
  }

  
}


const deleteUser = new DeleteUser();
export default deleteUser;
