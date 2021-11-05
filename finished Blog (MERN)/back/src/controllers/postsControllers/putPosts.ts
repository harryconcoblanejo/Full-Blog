import { Request, Response, Router } from "express";
import Post from "../../models/posts";

class UpdatePost {
  async updatePost(req: Request, res: Response) {
    const vacio = "{}";
    const postId = req.params.id;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const frontImageName = localStorage.getItem('front_image1');
    const intImageName = localStorage.getItem('int_image1')
    if (
       files.front_image && files.int_image==null){
        const modify = {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content,
          art_n: req.body.art_n,
          //  int_image: files.int_image,
          front_image: files.front_image,
        };
        try {
          const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
            new: true,
          });
      
          res.json({ message: "post modified successfully", updatedPost });
          //  console.log(uploadedImage)
          console.log(updatedPost);
          console.log("sto es lo q estoy mandando");
          console.log(req.files);
        } catch (error) {
          console.log(error);
          res.json({ message: "post not found / id not found ", error });
        }
    }

    if (
      files.int_image && files.front_image==null){
       const modify = {
         title: req.body.title,
         description: req.body.description,
         content: req.body.content,
         art_n: req.body.art_n,
           int_image: files.int_image,
        //  front_image: files.front_image,
       };
       try {
         const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
           new: true,
         });
     
         res.json({ message: "post modified successfully", updatedPost });
         //  console.log(uploadedImage)
         console.log(updatedPost);
         console.log("sto es lo q estoy mandando");
         console.log(req.files);
       } catch (error) {
         console.log(error);
         res.json({ message: "post not found / id not found ", error });
       }
   }



   if (
    files.int_image && files.front_image){
     const modify = {
       title: req.body.title,
       description: req.body.description,
       content: req.body.content,
       art_n: req.body.art_n,
      int_image: files.int_image,
      front_image: files.front_image,
     };
     try {
       const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
         new: true,
       });
   
       res.json({ message: "post modified successfully", updatedPost });
       //  console.log(uploadedImage)
       console.log(updatedPost);
       console.log("sto es lo q estoy mandando");
       console.log(req.files);
     } catch (error) {
       console.log(error);
       res.json({ message: "post not found / id not found ", error });
     }
 }



 if (
  !files.int_image && !files.front_image){
   const modify = {
     title: req.body.title,
     description: req.body.description,
     content: req.body.content,
     art_n: req.body.art_n,
    // int_image: files.int_image,
    // front_image: files.front_image,
   };
   try {
     const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
       new: true,
     });
 
     res.json({ message: "post modified successfully", updatedPost });
     //  console.log(uploadedImage)
     console.log(updatedPost);
     console.log("sto es lo q estoy mandando");
     console.log(req.files);
   } catch (error) {
     console.log(error);
     res.json({ message: "post not found / id not found ", error });
   }
}
    // const modify = {
    //   title: req.body.title,
    //   description: req.body.description,
    //   content: req.body.content,
    //   art_n: req.body.art_n,
    //   int_image: files.int_image,
    //   front_image: files.front_image,
    // };
    // try {
    //       const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
    //         new: true,
    //       });
  
    //       res.json({ message: "post modified successfully", updatedPost });
    //       //  console.log(uploadedImage)
    //       console.log(updatedPost);
    //       console.log("sto es lo q estoy mandando");
    //       console.log(req.files);
    //     } catch (error) {
    //       console.log(error);
    //       res.json({ message: "post not found / id not found ", error });
    //     }
//////////////////////////////////////////////////////////////
    // if (files== null || !files) {
    //   const modify = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     content: req.body.content,
    //     art_n: req.body.art_n,
    //   };

    //   try {
    //     const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
    //       new: true,
    //     });

    //     res.json({ message: "post modified successfully", updatedPost });
    //     //  console.log(uploadedImage)
    //     console.log(updatedPost);
    //     console.log("sto es lo q estoy mandando");
    //     console.log(req.files);
    //   } catch (error) {
    //     console.log(error);
    //     res.json({ message: "post not found / id not found ", error });
    //   }
    // }else if (files.front_image!==null ||files.front_image && files.int_image == null ||!files.int_image) {
    //   const modify = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     content: req.body.content,
    //     art_n: req.body.art_n,
    //     front_image: files.front_image,
    //   };

    //   try {
    //     const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
    //       new: true,
    //     });

    //     res.json({ message: "post modified successfully", updatedPost });
    //     //  console.log(uploadedImage)
    //     console.log(updatedPost);
    //     console.log("sto es lo q estoy mandando");
    //     console.log(req.files);
    //   } catch (error) {
    //     console.log(error);
    //     res.json({ message: "post not found / id not found ", error });
    //   }
    // }else if (files.front_image == null  && files.int_image !== null){
      
    //   const modify = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     content: req.body.content,
    //     art_n: req.body.art_n,

    //     int_image: files.int_image,
    //   };
    //   try {
    //     const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
    //       new: true,
    //     });

    //     res.json({ message: "post modified successfully", updatedPost });
    //     //  console.log(uploadedImage)
    //     console.log(updatedPost);
    //     console.log("sto es lo q estoy mandando");
    //     console.log(req.files);
    //   } catch (error) {
    //     console.log(error);
    //     res.json({ message: "post not found / id not found ", error });
    //   }
    // }else if(files.front_image !== null ||files.front_image && files.int_image !== null ||files.int_image){
    //   const modify = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     content: req.body.content,
    //     art_n: req.body.art_n,
    //     front_image: files.front_image,
    //     int_image: files.int_image,
    //   };
    //   try {
    //     const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
    //       new: true,
    //     });

    //     res.json({ message: "post modified successfully", updatedPost });
    //     //  console.log(uploadedImage)
    //     console.log(updatedPost);
    //     console.log("sto es lo q estoy mandando");
    //     console.log(req.files);
    //   } catch (error) {
    //     console.log(error);
    //     res.json({ message: "post not found / id not found ", error });
    //   } 
    // }
  }
}
//////////////////////////////////////////////////////////////////////////
//   if(JSON.stringify(req.files)!==vacio){
//     console.log(" no es null");
//     console.log(req.files)
//     const modify = {
//       title: req.body.title,
//       description: req.body.description,
//       content: req.body.content,
//       art_n: req.body.art_n,
//       front_image: files.front_image,
//       // int_image: files.int_image

//     };

//     try {
//       const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
//         new: true,
//       });

//       res.json({ message: "post modified successfully", updatedPost });
//       //  console.log(uploadedImage)
//       console.log(updatedPost);
//       console.log("sto es lo q estoy mandando");
//       console.log(req.files)

//     } catch (error) {
//       console.log(error);
//       res.json({ message: "post not found / id not found ", error });
//     }
//    }
//    else{ console.log('es null')

//   }
//   const modify = {
//     title: req.body.title,
//     description: req.body.description,
//     content: req.body.content,
//     art_n: req.body.art_n,
//     // uploadedImages: req.files,
//   };

//   try {
//     const updatedPost = await Post.findByIdAndUpdate(postId, modify, {
//       new: true,
//     });

//     res.json({ message: "post modified successfully", updatedPost });
//     //  console.log(uploadedImage)
//     console.log(updatedPost);
//     console.log("sto es lo q estoy mandando y no esta vacio");

//   } catch (error) {
//     console.log(error);
//     res.json({ message: "post not found / id not found ", error });
//   }

//   }

const upadatePost = new UpdatePost();
export default upadatePost;
