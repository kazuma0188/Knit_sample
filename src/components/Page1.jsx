import React from "react";
import { Link } from "react-router-dom";

export const Page1 = () => {
    return (
      <div className="Page1">
        <h1>Page1</h1>
        <h2>ここはpage1</h2>
        <br/>
      <Link to="/main">Homemain</Link>
      </div>
    );
  };
  
export default Page1