import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSun,BsMoon } from "react-icons/bs";

export default function Header() {
    let [theme,setTheme]=useState("light-mode")
  
    const onclickHandler=()=>{
        if(theme === "light-mode"){
            setTheme("dark-mode")
            document.body.className = theme;
        }
        if(theme === "dark-mode"){
            setTheme("light-mode")
            document.body.className = theme;
        }
    }
    
  return (
    <>

     
      <nav className="navbar navbar-expand-lg nav-light bg-light"  >:

      
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            Text-Editor
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            {
              theme=="light-mode"?<BsSun className="fs-3 me-3 text-dark" onClick={onclickHandler}/>:
              <BsMoon className="fs-3 me-3 " onClick={onclickHandler}/>

            }
          </div>
        </div>
      </nav>

    </>
  );
}
