import React,{ useState } from "react";
import { Link } from "react-router-dom";

export const Page2 = () => {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("ここに表示される");
  const printText = () => {
    if(inputText !== "") {
      setText(inputText);
      setInputElement("");
    }
    else
    {
      setText("文字を入力してください。");
    }
  }
    return (
      <div className="Page2">
        <h1>Page2</h1>
        <h2>ここはpage2</h2>

        <div className="print">
          <p>{text}</p>
        </div>
        <div className="ctr">
        <input value={inputText} onChange={(e) => setInputElement(e.target.value)} type="text" placeholder="入力してボタンを押してください。" />
        <button onClick={printText}>表示する</button>
        </div>

        <br/>
      <Link to="/main">Homemain</Link>
      </div>
    );
  };
  
export default Page2