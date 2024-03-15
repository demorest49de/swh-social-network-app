import s from "./Main.module.css"
import picture from "../../Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif";
import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {Messages} from "../pages/messages/Messages";

type UsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: string,
    name: string,
}


export function Main({users: us}: UsersType) {
    return (
        <main className={s.content}>
            <img className={s['main-img']} src={picture} alt="it"/>
            <Routes>
                <Route path="/" element={<Navigate to={'/profile'}/>}/>

                <Route path="/profile" element={<Messages/>}/>
                <Route path="/messages" element={<Messages/>}/>
                <Route path="/news" element={<Messages/>}/>
                <Route path="/music" element={<Messages/>}/>
                <Route path="/settings" element={<Messages/>}/>

                <Route path="/error" element={<Messages/>}/>
                <Route path="/*" element={<Navigate to={'/error'}/> }/>
            </Routes>

        </main>
    )
}

