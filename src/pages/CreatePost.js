import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { modules, formats } from "../constants/constants";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input type="summary" placeholder="Summary"></input>
      <input type="file"></input>
      <ReactQuill value={content} modules={modules} formats={formats} />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
};

export default CreatePost;
