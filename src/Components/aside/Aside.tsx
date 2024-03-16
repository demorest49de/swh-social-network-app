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
    const [isActive, setIsActive] = useState(false);

    const onClickHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const mappedLinks = titleArray.map(elem => {
        return (
            <LiStyled key={elem.title}><NavLink to={elem.link}
                                                className={({isActive}) =>
                                                    isActive ? (isLoading ? s.isPending : s.active) : s.navlink
                                                }
                                                onClick={onClickHandler}
            >{elem.title}</NavLink></LiStyled>
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

