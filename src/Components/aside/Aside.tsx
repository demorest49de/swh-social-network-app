import React, {useState} from 'react';
import s from "./Aside.module.css";
import {NavLink} from "react-router-dom";
import {LiStyled} from "./AsideStyled";

type AsideProps = {
    titleArray: Array<TitleProps>
}

type TitleProps = {
    title: string
    link: string
}

export const Aside = ({titleArray}: AsideProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClickHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const mappedLinks = titleArray.map(elem => {
        return (
            <li className={s.nav__item} key={elem.title}
                // use clsx
                // <div className={`${s.link} ${true && s.isActive}`}></div>
            >
                <NavLink to={elem.link}
                         className={({isActive}) =>
                             isActive ? (isLoading ? s.isPending : s.active) : s.navlink
                         }
                         onClick={onClickHandler}
                >{elem.title}</NavLink></li>
        )
    })
    return (
        <aside className={s.aside}>
            <nav>
                <ul>
                    {mappedLinks}
                </ul>
            </nav>
        </aside>
    );
};

