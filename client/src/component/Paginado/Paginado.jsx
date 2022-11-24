import React from "react";
import './Paginado.css'

export default function Paginado({ countriesPerPage, allCountries, paginado }){
    const pageNumber = [];
    
    // const firstCountries = allCountries.slice(0, 8)

    for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumber.push(i)
    };

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumber && pageNumber.map(number => (
                        <li key={number}>
                            <a onClick={() => paginado(number)}>{number}</a>
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
};