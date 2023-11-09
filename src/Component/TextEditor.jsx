import { useState } from "react";

export default function TextEditor() {
  let [text, setText] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
    console.log(">>>>>>>>>>>", text.length);
  };

  const uppercaseHandler=()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const lowerCaseHandler=()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <textarea
            className="w-100 mt-4 mx-auto   "
            value={text}
            onChange={textHandler}
          />
        </div>
        <div className="row">
          <div className="col ">
            <button className="btn btn-success mt-3  mx-1 " onClick={uppercaseHandler}> to Uppercase</button>
            <button className="btn btn-success mt-3  " onClick={lowerCaseHandler}> to Lowercase</button>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </>
  );
}
