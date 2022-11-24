import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({ id,flag ,continent, name }){
    return (
        <div className={style.card}>
            <img src={flag} alt="img not found" width="200px" height="250px"/>
            <div className={style.contenido}>
                <h3>{name}</h3>
                <h4>{continent}</h4>
                <Link to={`/home/${id}`}>
                    <button>Detail</button>
                </Link>
            </div>
        </div>
    )
}