import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Comment from "./components/Comment";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    
      <Header />
      <main>
      <div className="container-card">
        <h1>Venha nos visitar</h1>
        <Card />
        <Card />
      </div>
      <div className="container-comment">
        <h1>O que estão dizendo</h1>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
       

      </div>
      <div className="container-footer">
        <Footer/>
      </div>
      </main>
    </>
  );
}

export default App;
