import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import { Outlet, Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="body-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
