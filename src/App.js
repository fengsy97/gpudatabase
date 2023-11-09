// import GPU from "./gpu/GPU";
import Nva from "./navigation/Navigation";
import Datatable from "./database/Datatable";
import Container from "react-bootstrap/Container";
import Counter from "./counter/Counter";
import './style/bootstrap.min.css';
import ThemeBtn from "./component/ThemeBtn";
import {BrowserRouter, Routes,Switch, Route } from 'react-router-dom';
import Detail from "./detailpage/Detail";
import Compare from "./compare/Compare";
import About from "./about/About";
import { Link } from "react-router-dom";

function App() {
  const [theme, toggleTheme] = ThemeBtn();
  return (
    <>
    <Nva />
    {/* <Counter /> */}
    <Container as="main" className="py-4 px-3 mx-auto">
    {/* <hr className="mt-5 mb-4" /> */}
    <BrowserRouter>
    <div><Routes>
      <Route exact path="/" element={<Datatable />} />
      <Route exact path="/home" element={<Datatable />} />
      <Route exact path="/compare" element={<Compare />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/detail" element={<Detail />} />
    </Routes>
   </div>
    {/* <Datatable /> */}
    </BrowserRouter>
      
    </Container>
    {/* <button  onClick={toggleTheme}>Switch theme</button> */}
    </>
  );
}

export default App;
