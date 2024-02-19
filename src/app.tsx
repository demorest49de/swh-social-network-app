import React from 'react';
import {Main} from './Components/Main/main';
import {Nav} from "./Components/Nav/nav";
import  "./App.scss";
import {Header} from "./Components/header/Header";


function App() {
    return (
        <div className='App'>
            <h1></h1>
            <Header/>
            <Nav/>
            <Main/>
        </div>
    );
}

export default App;
