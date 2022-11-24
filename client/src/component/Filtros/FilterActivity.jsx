import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity } from "../../redux/actions";
import styles from "./Filter.module.css"

export default function FilterActivity(){
    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.activities)

    const handleFilterByActivity = (e) => {
        e.preventDefault();
        dispatch(filterByActivity(e.target.value))
    };

    return (
        <div className={styles.container}>
            <select onChange={e => handleFilterByActivity(e)}>
                <option value="All">All</option>
                {
                    allActivities?.map(a => (
                        <option value={a.name}>{a.name}</option>
                    ))
                }
            </select>
            <i></i>
        </div>
    )
}