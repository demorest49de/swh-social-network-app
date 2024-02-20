import React from 'react';
import {Main} from './Components/Main/main';
import {Aside} from "./Components/Aside/aside";
import "./App.scss";
import {Header} from "./Components/Header/Header";
import {Dialogs} from "./Components/Dialogs/Dialogs";


function App() {
    const dataLinks = [
        {title: 'Profile'},
        {title: 'Messages'},
        {title: 'News'},
        {title: 'Music'},
        {title: 'Settings'},
    ]
    return (
        <div className='App'>
            <h1></h1>
            <Header/>
            <Aside titleArray={dataLinks}/>
            {/*<Main/>*/}
            <Dialogs/>
        </div>
    );
}

export default App;
