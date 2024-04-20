import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {NavBar} from "./layout/sections/NavBar";
import {Content} from "./layout/sections/Content";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
