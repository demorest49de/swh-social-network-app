import React from 'react';
import s from "../Profile.module.css";

export const Post = () => {
    return (
        <div className={s.post__item}>
            <img className={s.post_img} src={'https://ltdfoto.ru/images/2024/03/16/avatar.jpg'} alt={"picture"}/>
            <div>post 1</div>
            <div>
                <span>like 1</span>
            </div>
        </div>
    );
};