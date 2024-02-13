import React from 'react';
import s from './App.module.css'
import picture from "./Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif"

export const Main = () => {
    return (
        <main className={s.content}>
            <Img/>
            {/*<div style={{width: "100%", backgroundColor: 'beige', height: '170px', padding: '10px'}}>hello</div>*/}
        </main>
    );
};

function Img() {
    return (
        <img src={picture} alt="it" className={s.main__img}/>
    )
}