import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './index.css';
import Content from "./Content";
const App = () => {
  return (
    <div className="App">
   
      <Header />
      <Content />
      <Footer/>
    </div>
  )
}

export default App;