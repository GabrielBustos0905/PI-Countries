import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, orderByName, orderByPopulation, getActivities } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import style from "./home.module.css"
import FilterContinent from "../Filtros/FilterContinent";
import FilterActivity from "../Filtros/FilterActivity";

export default function Home(){
    // ---------------- MapStateToProps -------------------------
    const dispatch = useDispatch();
    let allCountries = useSelector((state) => state.countries);
    let allError = useSelector(state => state.error)
    // ----------------------------------------------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [orden, setOrden] = useState('');
    const indexOfLastCountry = currentPage === 1 ? 9 : currentPage * countriesPerPage - 1;
    const indexOfFirstCountry = currentPage === 1 ? 0 : indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    // -- MapDispatchToProps --
    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivities());
    }, [dispatch]);
    // -------------------------

    const handleGetCountries = (e) => {
        e.preventDefault();
        dispatch(getCountries());
    }

    const handleOrderByName = (e) => {
        e.preventDefault(e);
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    const handleOrderByPoblation = (e) => {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    return(
        <div>

            <div className={style.header}>
                <div className={style.searchBar}>
                    <SearchBar />
                </div>
                <div className={style.cargar}>
                    <button onClick={e => handleGetCountries(e)}>Cargar Countries</button>
                </div>
                <div className={style.filter}>
                    <h4>Filtrar por:  </h4>
                    <FilterContinent />
                    <FilterActivity />
                </div>
                
            </div>

            <div className={style.order}>
                    <div>
                        <select onChange={e => {handleOrderByName(e)}}>
                            <option value="Upward">Upward</option>
                            <option value="Descending">Descending</option>
                        </select>
                    </div>

                    <div>
                        <select onChange={e => handleOrderByPoblation(e)}>
                            <option value="Min">Min</option>
                            <option value="Max">Max</option>
                        </select>
                    </div>
            </div>
            
            <div className={style.cargar}>
                <Link to='/activities'>
                    <button>
                        Create Activity
                    </button>
                </Link>
            </div>

            <Paginado 
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
            />

            <div>
                {
                    allError
                }
            </div>

            <nav className={style.container}>
                {
                    currentCountries?.map(c => {
                        return (
                            <div>
                                <React.Fragment>
                                    <Card 
                                        key={c.id} 
                                        id={c.id}
                                        flag={c.flag}
                                        continent={c.continent} 
                                        name={c.name} 
                                    />
                                </React.Fragment>
                            </div>
                        )
                    })
                }
            </nav>
        </div>
    )
};
