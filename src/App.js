// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Create from "./Component/Create";
import Update from "./Component/Update";
import View from "./Component/View";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/Update" element={<Update />}></Route>
          <Route path="/View" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
