import s from "./App.module.scss";
import React from 'react';

export const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="#">Element</a></li>
                <li><a href="#">Element</a></li>
                <li><a href="#">Element</a></li>
            </ul>
        </nav>
    );
};


