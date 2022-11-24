import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../redux/actions";
import style from "./SearchBar.module.css"

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getNameCountry(name));
    }

    return (
        <div className={style.container}>
            <input 
                type="text" 
                placeholder="Search.."
                onChange={e => handleInputChange(e)}  
            />
            <button className={style.btn} type="submit" onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )
}