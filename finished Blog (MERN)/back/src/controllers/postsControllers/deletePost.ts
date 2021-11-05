import { Request, Response, Router } from "express";
import Post from "../../models/posts";

class DeletePost {
  async deletePost(req: Request, res: Response) {
    try {
      const postId = req.params.id;
      const deletedPost = await Post.findByIdAndRemove(postId);
      res.json({ mesage: "post deleted successfully", deletedPost });
    } catch (error) {
      console.log(error);
      res.json({ message: "id not found / post not found", error });
    }
  }
}
const deletePost = new DeletePost();
export default deletePost.deletePost;
