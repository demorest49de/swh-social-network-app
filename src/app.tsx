import React from 'react';
import s from './App.module.css';
import {Main, UserType} from "./Components/main/Main";
import {Aside} from "./Components/aside/Aside";
import {Header} from "./Components/header/Header";

function App() {

    const users: Array<UserType> = [
        {id: '101', name: 'vasja1'},
        {id: '102', name: 'vasja2'}
    ]


    const dataLinks = [
        {title: 'Profile'},
        {title: 'Messages'},
        {title: 'News'},
        {title: 'Music'},
        {title: 'Settings'},
    ]
    return (
        <div className={s.App}>
            <Main users={users}/>
            <Header/>
            <Aside titleArray={dataLinks}/>
        </div>
    );
}

export default App;
