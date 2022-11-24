import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../redux/actions";
import style from "./Detail.module.css"
import { Link } from "react-router-dom";

export default function Detail({country}) {
    console.log(country)
    const dispatch = useDispatch();
    const myCountry = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetails(country))
    }, [dispatch])

    return (
        <div>
            <div className={style.cargar}>
                <Link to="/home">
                    <button>Go Home</button>
                </Link>
            </div>
            <div className={style.container}>
            <div>
                <img src={myCountry.flag} alt="No hay imagen" width='200px' height='100px'/>
            </div>
            <div className={style.info}>
                <h2>Name: {myCountry.name}</h2>
                <p>Continent: {myCountry.continent}</p>
                <p>Capital: {myCountry.capital}</p>
                <p>Subregion: {myCountry.subregion}</p>
                <p>Area: {myCountry.area} km²</p>
                <p>Population: {myCountry.population}</p>
            </div>

            <div className={style.activities}>
                
                {myCountry.activities?.map(a => {
                    return(
                        <div className={style.activity}>
                            <p>Name: {a.name}</p>
                            <p>Difficulty: {a.dificulty}</p>
                            <p>Duration: {a.duration}</p>
                            <p>Season: {a.season}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}