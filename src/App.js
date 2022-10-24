import GlobalStyled from "./assets/styled/GlobalStyled"

import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { useState } from "react";
import { useAuth } from "./context/auth";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";


function App() {
  const {image} = useAuth();
  
  return (
    <BrowserRouter>
      <GlobalStyled/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/habitos" element={<Habitos/>}/>
        <Route path="/hoje" element={<Hoje/>}/>
        <Route path="/historico" element={<Historico/>}/>
      </Routes>
    </BrowserRouter>
 );
}

export default App;
