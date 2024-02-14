import React from 'react';
import picture from "../../Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif"
import s from './Main.module.scss'

export const Main = () => {
    return (
        <main className={s.main}>
            <img className={s.main__img} src={picture} alt="it"/>
            <About/>
            <MyPosts/>
        </main>
    );
};

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <picture>
                    <img src="" alt=""/>
                </picture>
                <div className="about__personal-info">

                </div>
            </div>
        </section>
    )
}

type PostType = {
    message: string
}

const MyPosts = () => {
    return (
        <section className="posts">
            <div className="container">
                <h3>My posts</h3>
                <textarea name="" id=""></textarea>
                <button type="submit"></button>
                <div className="posts__history">
                    <Post message={'!!!'}/>
                    <Post message={'!!!'}/>
                    <Post message={'!!!!'}/>
                </div>
            </div>
        </section>
    )
}

const Post = ({message}: PostType) => {

    return (
        <div className="post__item">
            <img src="" alt=""/>
            <p>{message}</p>
            <span>like</span>
        </div>
    )
}
