import React from 'react';
import s from './Profile.module.css'
import clsx from "clsx";

export const Profile = () => {

    const profileText = clsx(s.profile__text)

    return (
        <div className={s.profile}>
            <h2>ava</h2>
            <p>description</p>
            <div>
                <h3 className={s.post__title}>My posts</h3>
                <textarea className={profileText}></textarea>
                <div className={s.posts}>
                    <div className={s.post__item}>
                        post 1
                    </div>
                    <div className={s.post__item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};