import s from "./Main.module.css"
import picture from "../../Assets/img/premium_photo-1669324357471-e33e71e3f3d8.avif";
import React from "react";

type UsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: string,
    name: string,
}


// export const Main: React.FC<UsersType> = (props) => {
export function Main({users: us}: UsersType) {
    return (
        <main className={s.content}>
            <img className={s['main-img']} src={picture} alt="it"/>
            <ul>
                {us.map((u, i ) => {
                    return <li key={u.id}>{i + 1}) id: {u.id}, name: {u.name}</li>
                })}
            </ul>
        </main>
    )
}

