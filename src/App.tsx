import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {NavBar} from "./layout/content/NavBar";

function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
        </div>
    );
}

export default App;
