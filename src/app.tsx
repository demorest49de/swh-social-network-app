import React from 'react';
import './App.css';
import {Header} from "./header";
import {Main} from './main';
import {Nav} from "./nav";
import s from "./App.module.css";
import {Footer} from "./footer";


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
