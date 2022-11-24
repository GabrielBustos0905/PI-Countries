import React from "react";
import { filterByContinent } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from "./Filter.module.css"

export default function FilterContinent(){

    const dispatch = useDispatch()

    const handleFilterByContinent = (e) => {
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
    };

    return (
        <div className={styles.container}>
            <select onChange={e => {handleFilterByContinent(e)}}>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>
        </div>
    )
}