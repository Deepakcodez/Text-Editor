import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextEditor from "./TextEditor";
import Header from "./Header";
import About from "./About";
import Errorpg from "./Errorpg";

export default function Layout() {
  return <>

  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<TextEditor/>}></Route>
    <Route path="" element={<TextEditor/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="*" element={<Errorpg/>}></Route>

  </Routes>
  </BrowserRouter>
   
  </>;
}
