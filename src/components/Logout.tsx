import React from "react";
//import Login from "./Login";

if (window.location.pathname === "/Logout") {
  setTimeout(() => {
    window.location.href = "/";
  }, 2 * 1000);
}



export const Logout = () => {
    

    return (
      <div className="Logout">
        <h1>ログアウトしました</h1>
        
        <br/>
      </div>
    );
  };
  //<Logout/>
export default Logout