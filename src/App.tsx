import React, { useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";
import Page404 from "./pages/Page404/Page404";
import Register from "./pages/Register";
import Write from "./pages/Write";
import { Context } from "./context/Context";
import Navbar from "./components/Navbar";
import Settings from "./pages/Settings";
import Categories from './pages/Categories';



function App() {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/write" element={user ? <Write/> : <Login/>} />
        <Route path="/settings" element={user ? <Settings/> : <Login/>} />
        <Route path="/new-category" element={user ? <Categories/> : <Login/>} />
        <Route path="/posts/:id" element={<SinglePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
