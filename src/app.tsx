import React from 'react';
import s from './App.module.css'
import {Aside} from './aside';
import {Header} from './header';
import {Main} from "./Components/main/Main";

function App() {
    const dataLinks = [
        {title: 'Profile'},
        {title: 'Messages'},
        {title: 'News'},
        {title: 'Music'},
        {title: 'Settings'},
    ]
    return (
        <div className={s.App}>
            <Main/>
            <Header/>
            <Aside titleArray={dataLinks}  />
        </div>
    );
}

export default App;
