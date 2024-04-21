import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {NavBar} from "./layout/sections/NavBar";
import {Content} from "./layout/sections/Content";
import {FlexWrapper} from "./components/FlexWrapper";

function App() {
    return (
        <div className="App">
            <Header/>
            <FlexWrapper gap={'200px'}>
                <NavBar/>
                <Content/>
            </FlexWrapper>

        </div>
    );
}

export default App;
