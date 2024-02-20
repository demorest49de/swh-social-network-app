import React from 'react';
import s from './Aside.module.scss'

type AsideProps = {
    titleArray: Array<TitleProps>
}

type TitleProps = {
    title: string
}

export const Aside = ({titleArray}: AsideProps) => {
    return (
        <aside className={
            s.aside
        }>
            <nav>
                <ul>
                    {
                        titleArray && titleArray.map(t => {
                            return (
                                <li key={t.title}><a href="/">{t.title}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    );
};


