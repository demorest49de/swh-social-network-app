import s from "./Main.module.css"
import picture from "../../Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Messages} from "../pages/messages/Messages";
import {Profile} from "../pages/profile/Profile";
import {News} from "../pages/news/News";
import {Music} from "../pages/music/Music";
import {Settings} from "../pages/settings/Settings";
import {Error} from "../pages/error/Error";

export type UserType = {
    id: string,
    name: string,
}


export function Main() {
    return (
        <main className={s.content}>
            <img className={s['main-img']} src={picture} alt="it"/>
            <Routes>
                <Route path="/" element={<Navigate to={'/profile'}/>}/>

                <Route path="/profile" element={<Profile/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>

                <Route path="/error" element={<Error/>}/>
                <Route path="/*" element={<Navigate to={'/error'}/>}/>
            </Routes>

        </main>
    )
}

