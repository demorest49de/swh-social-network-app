import React from 'react';
import s from './App.module.css';
import {Main, UserType} from "./Components/main/Main";
import {Aside} from "./Components/aside/Aside";
import {Header} from "./Components/header/Header";

function App() {

    const dataLinks = [
        {
            title: 'Profile',
            link: 'profile',
        },
        {
            title: 'Messages',
            link: 'messages',
        },
        {
            title: 'News',
            link: 'news',
        },
        {
            title: 'Music',
            link: 'music',
        },
        {
            title: 'Settings',
            link: 'settings',
        },
    ]
    return (
        <div className={s.App}>
            <Main />
            <Header/>
            <Aside titleArray={dataLinks}/>
        </div>
    );
}

export default App;
