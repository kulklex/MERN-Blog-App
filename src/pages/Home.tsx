import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Posts from "./Posts";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home flex flex-row">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  );
}
