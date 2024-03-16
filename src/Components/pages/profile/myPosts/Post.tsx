import React from 'react';
import s from "../Profile.module.css";

export const Post = () => {
    return (
        <div className={s.post__item}>
            <img className={s.post_img} src={'https://ltdfoto.ru/images/2024/03/16/avatar.jpg'}/>
            <div>post 1</div>
            <div>
                <span>like 1</span>
            </div>
        </div>
    );
};