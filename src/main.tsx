import React from 'react';
import s from './App.module.scss'
import picture from"./Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif"

export const Main = () => {
    return (
        <main className={s.main}>
            <img className={s.main__img} src={picture} alt="it"/>
            <div>
                ava + description
            </div>
            <div>
                subtitle
                input
                button
            </div>
            <div>
                history
                <div>
                    Posts
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 1
                    </div>
                </div>
            </div>
        </main>
    );
};