import React from 'react';
import {Main} from './main';
import {Nav} from "./nav";
import s from "./App.module.scss";
import {Footer} from "./footer";
import {Header} from "./Components/Header/Header";


function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Nav/>
            <Main/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
