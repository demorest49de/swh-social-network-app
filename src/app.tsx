import React from 'react';
import s from './App.module.css'
import {Aside} from './aside';
import {Header} from './header';
import {Main} from "./Components/main/Main";

function App() {
    return (
        <div className={s.App}>
            <Main/>
            <Header/>
            <Aside/>
        </div>
    );
}

export default App;
