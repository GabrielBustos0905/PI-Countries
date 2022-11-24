import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivities } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./ActivityCreate.css";
import { selectedCountry, selectedDificulty, selectedSeason } from "./main";
import style from "./activity.module.css"


export const validate = (input) => {
    let error = {};

    if(!input.name) {
        error.name = "Name is required!"
    }

    if(!input.duration) {
        error.duration = "Duration is required"
    } else if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(input.duration)){
        error.duration = "Duration is invalid, formato HH:MM"
    }

    if(input.dificulty === 0){
        error.dificulty = "Ingrese una dificultad"
    }

    if(!input.season) {
        error.season = "Season is required"
    }

    if(input.countries.length === 0){
        error.countries = "Countries required"
    }

    return error
};


export default function ActivityCreate(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: "",
        dificulty: 0,
        duration: "",
        season: "",
        countries: []
    });

    const [error, setError] = useState({})

    useEffect(() => {
        dispatch(getCountries());
        selectedCountry();
        selectedSeason();
        selectedDificulty()
    }, [dispatch]);

    console.log(input)

    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        let objError = validate({...input, [e.target.name]: e.target.value})

        setError(objError)
    };

    const handleDificultyChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            dificulty: e.target.value
        })

        let objError = validate({...input, dificulty: e.target.value})

        setError(objError)
    };

    const handleSeasonChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            season: e.target.value
        })

        let objError = validate({...input, season: e.target.value})

        setError(objError)
    };

    const handleCountryChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        });

        let objError = validate({...input, countries: [...input.countries, e.target.value]})

        setError(objError)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        
        dispatch(postActivities(input));
        alert("Actividad Creada :D")
        setInput({
            countries: [],
            name: "",
            dificulty: 1,
            duration: "",
            season: "Summer",
        })
        
    };

    const handleDelete = (e) => {
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e)
        })
    }

    return (
        <div className={style.body}>
            <h1>Crear actividad</h1>

            <Link to="/home">
                <p>Go Back</p>
            </Link>

            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    {error.name && <p>{error.name}</p>}
                </div>


                <div>
                    <label>Duration: </label>
                    <input 
                        type="text" 
                        value={input.duration}
                        name="duration"
                        onChange={e => handleChange(e)}
                        className={error.duration && 'danger'}
                        />
                    {error.duration && <p>{error.duration}</p>}
                </div>


                <div className="container">
                    <div className="select-box">
                        <div className="option-container-3">
                            <div className="option-3">
                                <input 
                                    type="radio" 
                                    name="1"
                                    value="1"
                                    className="radio"
                                    id="1"
                                    onChange={e => handleDificultyChange(e)}
                                />
                                <label htmlFor="1">1</label>
                            </div>
                            <div className="option-3">
                                <input 
                                    type="radio" 
                                    name="2"
                                    value="2"
                                    className="radio"
                                    id="2"
                                    onChange={e => handleDificultyChange(e)}
                                />
                                <label htmlFor="2">2</label>
                            </div>
                            <div className="option-3">
                                <input 
                                    type="radio" 
                                    name="3"
                                    value="3"
                                    className="radio"
                                    id="3"
                                    onChange={e => handleDificultyChange(e)}
                                />
                                <label htmlFor="3">3</label>
                            </div>
                            <div className="option-3">
                                <input 
                                    type="radio" 
                                    name="4"
                                    value="4"
                                    className="radio"
                                    id="4"
                                    onChange={e => handleDificultyChange(e)}
                                />
                                <label htmlFor="4">4</label>
                            </div>
                            <div className="option-3">
                                <input 
                                    type="radio" 
                                    name="5"
                                    value="5"
                                    className="radio"
                                    id="5"
                                    onChange={e => handleDificultyChange(e)}
                                />
                                <label htmlFor="5">5</label>
                            </div>
                        </div>
                        <div className="selected-3">
                            Selected Difficulty
                        </div>
                    </div>
                    {error.dificulty && <p>{error.dificulty}</p>}
                </div>

                <div className="container">
                    <div className="select-box">
                        <div className="option-container-2">
                            <div className="option-2">
                                <input 
                                    type="radio" 
                                    name="Summer"
                                    value="Summer"
                                    className="radio" 
                                    id="Summer"
                                    onChange={e => handleSeasonChange(e)}
                                />
                                <label htmlFor="Summer">Summer</label>
                            </div>
                            <div className="option-2">
                                <input 
                                    type="radio" 
                                    name="Fall"
                                    value="Fall"
                                    className="radio" 
                                    id="Fall"
                                    onChange={e => handleSeasonChange(e)}
                                />
                                <label htmlFor="Fall">Fall</label>
                            </div>
                            <div className="option-2">
                                <input 
                                    type="radio" 
                                    name="Winter"
                                    value="Winter"
                                    className="radio" 
                                    id="Winter"
                                    onChange={e => handleSeasonChange(e)}
                                />
                                <label htmlFor="Winter">Winter</label>
                            </div>
                            <div className="option-2">
                                <input 
                                    type="radio" 
                                    name="Spring"
                                    value="Spring"
                                    className="radio" 
                                    id="Spring"
                                    onChange={e => handleSeasonChange(e)}
                                />
                                <label htmlFor="Spring">Spring</label>
                            </div>
                        </div>
                        <div className="selected-2">
                            Selected Season
                        </div>
                    </div>
                    {error.season && <p>{error.season}</p>}
                </div>

                <div className="container">
                    <div className="select-box">
                        <div className="option-container">
                            {
                                allCountries.map(c => (
                                    <div className="option">
                                        <input 
                                            type="radio" 
                                            name="countries" 
                                            value={c.name} 
                                            className="radio"
                                            id={c.name}
                                            onChange={e => handleCountryChange(e)}
                                        />
                                        <label htmlFor={c.name}>{c.name}</label>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="selected">
                            Selected Country
                        </div>
                    </div>
                    
                    {error.countries && <p>{error.countries}</p>}
                </div>
                <button type="subbmit">Create</button>
            </form>
            
            {
                input.countries.map(c => (
                    <div>
                        <p>{c}</p>
                        <button onClick={() => handleDelete(c)}>X</button>
                    </div>
                ))
            }

        </div>
    )
}