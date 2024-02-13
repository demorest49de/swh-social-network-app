import React from 'react';
import {Main} from './Components/Main/main';
import {Nav} from "./Components/Nav/nav";
import  "./App.scss";
import {Header} from "./Components/Header/Header";


function App() {
    return (
        <div className='App'>
            <Header/>
            <Nav/>
            <Main/>
        </div>
    );
}

export default App;
