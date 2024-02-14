import s from "../../App.module.css";
import picture from "../../Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif";
import React from "react";

export function Main() {
    return (
        <main className={s.content}>
            <img className={s['main-img']} src={picture} alt="it"/>
        </main>
    )
}

