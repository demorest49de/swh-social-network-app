import React from 'react';
import s from './App.module.css'
import picture from"./Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif"

export const Main = () => {
    return (
        <main className={s.content}>
            <img className={s.main__img} src={picture} alt="it"/>
        </main>
    );
};