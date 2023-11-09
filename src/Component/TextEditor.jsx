import { useEffect, useState } from "react";

export default function TextEditor() {
  let [text, setText] = useState("");
  let [char, setChar] = useState(0)
  let [word, setWord] = useState(0)

  useEffect(() => {
    
      let wordlen =  text.split(" ").length-1
      let lenOfText = text.length-word;
      setChar(lenOfText)
       setWord(wordlen)
    
  }, [text]);


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
          </div>
        </div>
        <div className="row">
          <div className="col mt-2 ">{word} words and {char} character</div>
        </div>
      </div>
    </>
  );
}
