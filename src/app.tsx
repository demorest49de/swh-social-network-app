import React from 'react';
import './App.css';
import {Main} from './main';
import {Nav} from "./nav";
import s from "./App.module.css";
import {Footer} from "./footer";
import {Header} from "./Layout/header/Header";


function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
