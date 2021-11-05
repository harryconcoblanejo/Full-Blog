import React, { useState, createContext, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import "../../styles/newPost.css";
import axios, { AxiosResponse } from "axios";
import { useHistory } from "react-router-dom";

type FormData = {
  title: string;
  description: string;
  content: string;
  art_n: string;
  // uploadedImage: [];
  front_image: string;
  int_image: string;

  front_image_url: string;
  int_image_url: string;

  createdAt: string;
  updatedAt: Date;
  created_by: any;
};

const NewPost = () => {
  const [front_image1, setFront_image] = useState<any>();
  const [int_image1, setInt_image] = useState<any>();
  const [title1, setTitle] = useState("");
  const [description1, setDescription] = useState("");
  const [content1, setContent] = useState("");
  const [art_n1, setArt_n] = useState("");
  const [uploadedImages, setUploadedImages] = useState<any>({});
  const [prev1, setPrev1] = useState("");
  const [prev2, setPrev2] = useState("");

  const { register, errors, handleSubmit } = useForm<FormData>({
    mode: "onBlur",
  });

  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("my token");

  useEffect(() => {
    if (front_image1) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrev1(reader.result as string);
      };
      reader.readAsDataURL(front_image1);
      console.log(prev1);
    } else {
      setPrev1("");
    }
    if (int_image1) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrev2(reader.result as string);
      };
      reader.readAsDataURL(int_image1);
      console.log(prev2);
    } else {
      setPrev2("");
    }
  }, [front_image1, int_image1, prev1, prev2]);

  const onNewPost = async (e: any) => {
    const data = new FormData();
    data.append("title", title1);
    data.append("description", description1);
    data.append("content", content1);
    data.append("art_n", art_n1);
    data.append("front_image", front_image1);
    data.append("int_image", int_image1);

    //  data.append("uploadedImages", uploadedImages)

    try {
      const res = await axios.post(
        `http://localhost:4000/api/posts/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      console.log(res);
      setMessage(res.data.message);
      goToHome();
    } catch (error) {
      setErrorMessage(error.response.data.message);

      console.log("no anda" + errorMessage);
    }
  };

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <h2 className="newPostWelcome">Make a new post...</h2>
      <h2>{message}</h2>
      <div className="newPostContainer">
        <form
          onSubmit={handleSubmit(onNewPost)}
          className="newPostForm"
          encType="multipart/form-data"
        >
          <div className="newPostFieldsContainer">
            <input
              type="text"
              name="title"
              placeholder="Title of the publication"
              onChange={(e) => {
                const { value } = e.target;
                setTitle(value);
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                (e.target.placeholder = "")
              }
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="titleField"
            />
            {errors.title && (
              <span className="obligatoryMessage"> {errors.title.message}</span>
            )}

            <input
              type="text"
              name="description"
              placeholder="Write a description"
              onChange={(e) => {
                const { value } = e.target;
                setDescription(value);
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                (e.target.placeholder = "")
              }
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="descriptionField"
            />
            {errors.description && (
              <span className="obligatoryMessage">
                {" "}
                {errors.description.message}
              </span>
            )}

            <textarea
              // type="textarea"
              name="content"
              placeholder="Write a content"
              onChange={(e) => {
                const { value } = e.target;
                setContent(value);
              }}
              onFocus={(event: React.FocusEvent<HTMLTextAreaElement>) =>
                (event.target.placeholder = "")
              }
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="textarea"
            />
            {errors.content && (
              <span className="obligatoryMessage">
                {" "}
                {errors.content.message}
              </span>
            )}

            <input
              type="text"
              name="art_n"
              placeholder="Publication number"
              onChange={(e) => {
                const { value } = e.target;
                setArt_n(value);
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                (e.target.placeholder = "")
              }
              ref={register({
                required: { value: true, message: "Obligatory field" },
              })}
              className="numberField"
            />
            {errors.art_n && (
              <span className="obligatoryMessage"> {errors.art_n.message}</span>
            )}
          </div>

          <div className="imageContainer">
            <div>
            <div className="newPostImage1">
            <label htmlFor="front_image" className="text">
              Image 1
            </label>

            <input
              type="file"
              name="front_image"
              id="front_image"
              onChange={(e) => {
                const file = e.target.files![0];
                setFront_image(file as any);
                console.log(front_image1);
                localStorage.setItem("front_image1", prev1);
                // setUploadedImages({...uploadedImages,front_image:file})
              }}
              ref={register({
                required: { value: true, message: "Load a principal image" },
              })}
            />
          </div>
              
            </div>

            <img className="prevImage1" src={prev1} alt="" />
          </div>



          <div className="imageContainer">
            <div>
              <div className="newPostImage2">
                <label htmlFor="int_image" className="text">
                  Image 2
                </label>

                <input
                  type="file"
                  name="int_image"
                  placeholder="upload an image"
                  id="int_image"
                  onChange={(e) => {
                    const file = e.target.files![0];
                    setInt_image(file as any);
                    console.log(int_image1);
                    localStorage.setItem("int_image1", prev2);

                    //  setUploadedImages({...uploadedImages,int_image:file})
                  }}
                  ref={register({
                    required: { value: true, message: " Load internal image" },
                  })}
                />
              </div>

              
            </div>
            <img className="prevImage2" src={prev2} alt="" />
          </div>

         

          <button type="submit" className="button">
            Create!
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewPost;
