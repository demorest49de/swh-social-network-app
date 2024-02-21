import React from 'react';
import s from "./Aside.module.css";

type AsideProps = {
    titleArray: Array<TitleProps>
}

type TitleProps = {
    title: string
}

export const Aside = ({titleArray}: AsideProps) => {
    const mappedLinks = titleArray.map(title=>{
        return(
            <li key={title.title}><a href="/public">{title.title}</a></li>
        )
    })
    return (
        <aside className={s.aside}>
            <nav className={s.nav}>
                <ul>
                    {mappedLinks}
                    {/* <li><a href="/">{title}</a></li>
                    <li><a href="/">{title}</a></li>
                    <li><a href="/">{title}</a></li> */}
                </ul>
            </nav>
        </aside>
    );
};