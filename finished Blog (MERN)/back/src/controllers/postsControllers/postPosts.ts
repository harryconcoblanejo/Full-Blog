import { Request, Response, Router } from "express";
import Post from "../../models/posts";
import User from "../../models/user";

//  interface MulterRequest extends Request {
//         front_image: any
//         int_image: any
//     }

class CreatePost {
  async createPost(req: Request, res: Response) {
  const files= req.files as { [fieldname: string]: Express.Multer.File[] };
    try {
      const {
        title,
        description,
        content,
        art_n,
        front_image_url,
        int_image_url,
      } = req.body;
      // const uploadedImages = req.files;/////
      const front_image = files.front_image;
      const int_image = files.int_image;
     
      // const  front_image = req.file;
      // const int_image = req.file;
      const newPost = new Post({
        title,
        description,
        content,
        art_n,
        // uploadedImages,////
           front_image,
           int_image,  front_image_url,
        int_image_url,
      });

      const user = await User.findById(req.params._id);
      newPost.created_by = user;
      await newPost.save();
      console.log(newPost)
      user!.posts.push(newPost);
      await user!.save();
    //   res.send(newPost);

      res.send({ message: "post created", data: newPost });
      
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  }
}

const createPost = new CreatePost();
export default createPost;
