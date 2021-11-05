import React, { Fragment, useContext, useEffect, useState } from "react";
import { FaSistrix } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useHistory, Redirect, Link } from "react-router-dom";
import "../../styles/search.css";
import SearchProvider, { SearchContext } from "./searchProvider/SearchProvider";

const Searcher = () => {
  const { register, errors, handleSubmit } = useForm();
  const [title, setTitle] = useState("");
  const history = useHistory();

  
  const onSearch = () => {
    localStorage.setItem("title", title);

    history.push("/");
    history.push("/PostsBySearch");

    
    setTitle("");
  };

  return (
    <Fragment>
      <form
        className="searchBox"
        onSubmit={handleSubmit(onSearch)}
        encType="application/x-www-form-urlencoded"
      >
        <span className="lupa">
          <FaSistrix onClick={handleSubmit(onSearch)} />
        </span>

        <input
          className="search"
          id="title"
          type="text"
          placeholder="Search..."
          name="title"
          onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
            (e.target.placeholder = "")
          }
          onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
            (e.target.placeholder = "Search...")
          }
          //clear input
          value={title}
          onChange={(e) => {
            const { value } = e.target;
            setTitle(value);
          }}
          ref={register({
            required: { value: true, message: "write a title" },
          })}
        />
        {errors.search && (
          <span className="errorMessage"> {errors.search.message}</span>
        )}
      </form>
      ;
    </Fragment>
  );
};

export default Searcher;
