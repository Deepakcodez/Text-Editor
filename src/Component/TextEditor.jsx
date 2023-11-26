import { useEffect, useState } from "react";
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextEditor() {

  let [text, setText] = useState("");
  let [char, setChar] = useState(0);
  let [word, setWord] = useState(0);

  useEffect(() => {
    let wordlen = text.split(" ").length - 1;
    let lenOfText = text.length - word;
    setChar(lenOfText);
    setWord(wordlen);
  }, [text,word]);

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const uppercaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearHandler = () =>{
      setText('')
      setChar(0)
  }

  const notify = () =>{
  
  if(text==""){toast.error("nothing to copy!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })}
else{
  toast.info("copy to clipboard!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    })
}}
 

  const copyHandler=()=>{
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
      });
  }


  
  return (
    <>
      <div className="container">
        <div className="row">
          <textarea
            className="w-100 mt-4 mx-auto  p-2 bg-dark  "
            value={text}
            style={{ color: "#E0B0FF" }}
            onChange={textHandler}
          />
        </div>
        <div className="row">
          <div className="col ">
            <button
              className="btn btn-success mt-3  mx-1 "
              onClick={uppercaseHandler}
            >
              {" "}
              to Uppercase
            </button>
            <button
              className="btn btn-success mt-3  "
              onClick={lowerCaseHandler}
            >
              {" "}
              to Lowercase
            </button>

            <button className="btn btn-success mt-3 mx-1  " onClick={clearHandler}>
              Clear{" "}
            </button>
            <button className="btn btn-success mt-3     " onClick={()=>{copyHandler(),notify()}}>
              Copy
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col mt-2 ">
            {word} words and {char} character
          </div>
        </div>
      </div>
      <ToastContainer />

    </>
  );
}
