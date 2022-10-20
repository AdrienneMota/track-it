import Login from "./pages/Login";
import GlobalStyled from "./assets/styled/GlobalStyled"
import Cadastro from "./pages/Cadastro"
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
      

    </BrowserRouter>
 );
}

export default App;
