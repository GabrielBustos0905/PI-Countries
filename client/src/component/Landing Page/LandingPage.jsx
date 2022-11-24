import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

export default function LandingPage(){
    return (
        <div className={style.container}>
            <h1>Landing Page</h1>
            <Link to='/home'>
                <button>Ingresar :D</button>
            </Link>
        </div>
    )
}