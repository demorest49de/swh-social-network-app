import React from 'react';
import s from "./Aside.module.css";
import {NavLink} from "react-router-dom";

type AsideProps = {
    titleArray: Array<TitleProps>
}

type TitleProps = {
    title: string
    link: string
}

export const Aside = ({titleArray}: AsideProps) => {
    const mappedLinks = titleArray.map(title=>{
        return(
            <li key={title.title}><NavLink to='messages'>{title.title}</NavLink></li>
        )
    })
    return (
        <aside className={s.aside}>
            <nav className={s.nav}>
                <ul>
                    {mappedLinks}
                </ul>
            </nav>
        </aside>
    );
};