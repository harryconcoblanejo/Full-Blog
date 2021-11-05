import React, { Fragment, useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
// import "../../styles/userForm.css";
import "../../styles/formUpdate.css";
import axios from "axios";
import mensajeTest from "../posts/mensajeTest";
import { AppContext } from "../posts/PostProvider";

const token = localStorage.getItem("my token");

type FormData = {
  title: string;
  description: string;
  content: string;
  art_n: string;
  // uploadedImage: [{}];

  front_image: {};
  int_image: {};

  front_image_url: string;
  int_image_url: string;

  createdAt: string;
  updatedAt: Date;
  created_by: any;
  _id: string;
};

const FormUpdate = () => {
  const [mySelectedPostToUpdate, setMySelectedPostToUpdate] = useContext<any>(
    AppContext
  );

  const [PostId, setPostId] = useState(localStorage.getItem("postId"));

  const [front_imageText, setFront_imageText] = useState<any>("");
  const [int_imageText, setInt_imageText] = useState<any>("");
  const [front_image1, setFront_image1] = useState<any>("no image");
  const [int_image1, setInt_image1] = useState<any>("no image");

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [art_n, setArt_n] = useState("");

  const [img1, setImg1] = useState<any>("");
  const [img2, setImg2] = useState<any>("");
  const [value1, setValue1] = useState<any>("");
  const [value2, setValue2] = useState<any>("");

  const [message, setMessage] = useState("");

  const getData = () => {
    console.log("seteando imagenes en el eefect");
    setTitle(mySelectedPostToUpdate[0].title);
    setDescription(mySelectedPostToUpdate[0].description);
    setContent(mySelectedPostToUpdate[0].content);
    setArt_n(mySelectedPostToUpdate[0].art_n);

    if (
      mySelectedPostToUpdate[0].front_image &&
      mySelectedPostToUpdate[0].int_image
    ) {
      setInt_image1(mySelectedPostToUpdate[0].int_image[0]);
      setFront_image1(mySelectedPostToUpdate[0].front_image[0]);
      setInt_imageText(mySelectedPostToUpdate[0].int_image[0].originalname);
      localStorage.setItem("int_image1", int_imageText);
      setFront_imageText(mySelectedPostToUpdate[0].front_image[0].originalname);
      localStorage.setItem("front_image1", front_imageText);
      setImg1(
        "../../../images/" + mySelectedPostToUpdate[0].front_image[0].filename
      );
      setImg2(
        "../../images/" + mySelectedPostToUpdate[0].int_image[0].filename
      );

      setValue1(mySelectedPostToUpdate[0].front_image[0].filename);
      setValue2(mySelectedPostToUpdate[0].int_image[0].filename);
    } else console.log("not images yet");

    console.log(mySelectedPostToUpdate);
    console.log(img1, img2);
  };
  useEffect(() => {
    getData();
  }, [mySelectedPostToUpdate]);

  const [errorMessage, setErrorMessage] = useState("");
  const { register, errors, handleSubmit } = useForm<FormData>({
    mode: "onBlur",
  });

  const onUpdatePost = async (e: any) => {
    const data = new FormData();

    data.append("title", title);
    data.append("description", description);
    data.append("content", content);
    data.append("art_n", art_n);

    data.append("front_image", front_image1);
    data.append("int_image", int_image1);

    try {
      const res = await axios.put(
        `http://localhost:4000/api/posts/${PostId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      setMessage(res.data.message);

      //  const refresh = () => {

      //  window.location.href = "/posts";
      // //   console.log("post actualizado..." + uploadedImages);
      // //   console.log(uploadedImages);

      // };
      // refresh();
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setFront_image1("");
      setInt_image1("");
      console.log("no anda" + errorMessage);
    }
  };

  return (
    <div>
      
{/* 
      <h2>Title:{title}</h2>

      <p>
        Description: {description} <br />
        Content: {content} <br />
        Number of article: {art_n} <br />
      </p> */}

      <div className="updateContainer">
        <form className="updateForm"
          onSubmit={handleSubmit(onUpdatePost)}
          
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              const { value } = e.target;
              setTitle(value);
            }}
            ref={register({
              required: { value: true, message: "Obligatory field" },
            })}
             className="updateTitleField"
          />
          {errors.title && <span> {errors.title.message}</span>}

          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              const { value } = e.target;

              setDescription(value);
            }}
            ref={register({
              required: { value: true, message: "Obligatory field" },
            })}
            className="updateDescriptionField"
          />
          {errors.description && <span> {errors.description.message}</span>}
           <div   >
              <input
            
            type="text" 
            name="content"
            value={content}
            onChange={(e) => {
              const { value } = e.target;
              setContent(value);
            }}
            ref={register({
              required: { value: true, message: "Obligatory field" },
            })}
            className="updateContentField"
            
          />
          {errors.content && <span> {errors.content.message}</span>}

           </div>
         
          <input
            type="text"
            name="art_n"
            value={art_n}
            onChange={(e) => {
              const { value } = e.target;
              setArt_n(value);
            }}
            ref={register({
              required: { value: true, message: "Obligatory field" },
            })}
            className="updateNumberField"
          />
          {errors.art_n && <span> {errors.art_n.message}</span>}

          <div >
            <label htmlFor="front_image" className="updateImageButton1">
              Front Image Picture
            </label>

            {/* <label htmlFor="front_image">
              <input
                type="text"
                value={front_imageText}
                onChange={(e) => {
                  const file = e.target.files![0].name;

                  setFront_imageText(e.target.files![0].name);
                }}
              />
            </label> */}
            <input
              type="file"
              name="front_image"
              id="front_image"
              onChange={(e) => {
                const file1 = e.target.files![0];

                setFront_image1(file1);

                setFront_imageText(e.target.files![0].name);
                localStorage.setItem("front_image1", e.target.files![0].name);
                setValue1(1);

                const reader = new FileReader();
                reader.onloadend = () => {
                  setImg1(reader.result as string);
                };
                reader.readAsDataURL(file1);
              }}
              ref={register}
            />
          </div>
          <div >
            <label htmlFor="int_image" className="updateImageButton2">
              Content Image Picture
            </label>
{/* 
            <label htmlFor="int_image">
              <input
                type="text"
                value={int_imageText}
                onChange={(e) => {
                  const file = e.target.files![0].name;
                  setInt_imageText(e.target.files![0].name);

                  const file2 = e.target.files![0];
                }}
              />
            </label> */}
            <input
              type="file"
              name="int_image"
              placeholder="upload an image"
              id="int_image"
              onChange={(e2) => {
                const file2 = e2.target.files![0];

                setInt_image1(file2);

                setInt_imageText(e2.target.files![0].name);

                localStorage.setItem("int_image1", e2.target.files![0].name);
                setValue2(2);
                const reader = new FileReader();
                reader.onloadend = () => {
                  setImg2(reader.result as string);
                };
                reader.readAsDataURL(file2);
              }}
              ref={register}
            />
          </div>

          <button type="submit" className=" updateButton2">
            {<span>Update!</span>}
          </button>
        </form>

         <img className="image1" src={img1} alt="" />
      <img className="image2" src={img2} alt="" />
      </div>

      <h2 className="updateMessage">{message}</h2>
    </div>
  );
  // } else return <h2>loading..</h2>;
};

export default FormUpdate;
