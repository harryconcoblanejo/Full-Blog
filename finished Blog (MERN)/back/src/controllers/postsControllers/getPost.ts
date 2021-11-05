import { Request, Response, Router } from "express";
import Post from "../../models/posts";
import User from "../../models/user";
import { LocalStorage } from "node-localstorage";


global.localStorage = new LocalStorage("./scratch");

class GetPosts {
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await Post.find();

      if (posts.length == 0)
        return res.json({ message: "There are no publications", posts });
      else {
        res.json({ message: "here are the posts", posts });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getByTitle(req: Request, res: Response) {
    
    const title:any = new RegExp(req.params.title, "i");
    
    console.log("entra esto" + req.params.title);
    try {
     
      const posts = await Post.find({ title: title });
      


    //  if(req.params.title == ''){
    //   return res
    //   .status(200)
    //   .send({ message: "enter a title",posts});
    //  }

      if (posts.length === 0) {
        return res
          .status(200)
          .send({ message: 'There are no publications with that title',posts });

      
      } else return res.status(200).json({ message: "match", posts });
    } catch (error) {
      return res.status(404).send(error);
    }

    // try {
    //   const posts = await Post.find(

    //     { title: { $regex: title} },
    //     "title description "
    //   );

    //   if (title != req.body.title)
    //     return res.status(404).send({
    //       message: "there are no publications with that title",
    //       title,
    //     });

    //   return res.json({ message: `search ${title}`, posts });
    // } catch (error) {
    //   console.log(error);
    //   res.json(error);
    // }
  }

  async getOnePostById(req: Request, res: Response) {
    try {
      const postId = req.params.id;
      const post = await Post.findById(postId);

      res.json(post);
    } catch (error) {
      console.log(error);
    }
  }

  async getPostByUser(req: Request, res: Response) {
    try {
      const userId = req.params._id;
      console.log("este es el usuario " + userId);

      const posts = await Post.find({ created_by: userId });
      console.log(posts);

      if (posts.length !== 0) {
        return res.json({ message: "this are your publications: ", posts });
      } else res.json({ message: "este usuario no tiene posteos" });
    } catch (error) {
      console.log(error);
    }
  }

  async getLastSixPosts(req: Request, res: Response) {
    try {
      const posts = await Post.find();
      const lasts = posts.reverse();
      const lasts6 = lasts.slice(0, 6);

      if (lasts6.length==0) {
        return res.status(200).send({ message: "no posts" });
      } else return res.json({ lasts6, message: "this are the posts" });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}
const getPosts = new GetPosts();

export default getPosts;
