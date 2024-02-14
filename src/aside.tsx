import React from 'react';
import s from "./App.module.css";

export const Aside = () => {
    return (
        <aside className={s.aside}>
            <nav className={s.nav}>
                <ul>
                    <li><a href="/">Element</a></li>
                    <li><a href="/">Element</a></li>
                    <li><a href="/">Element</a></li>
                </ul>
            </nav>
        </aside>
    );
};