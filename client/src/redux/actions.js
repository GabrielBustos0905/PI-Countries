import axios from 'axios';

export const getCountries = () => {
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/countries', {});

        return dispatch({
            type: 'GET_COUNTRIES',
            payload: json.data
        })
    }
};

export const getActivities = () => {
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/activities', {});

        return dispatch({
            type: "GET_ACTIVITIES",
            payload: json.data
        })
    }
}

export const getNameCountry = (name) => {
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: "GET_NAME_COUNTRIES",
                payload: json.data
            })
        } catch (error) {
            return dispatch({
                type: "GET_NAME_ERROR",
                payload: "Country inexistente"
            })
        }
    }
};

export const filterByContinent = (payload) => {
    return {
        type: "FILTER_BY_CONTINENT",
        payload
    }
};

export const filterByActivity = (payload) => {
    return{
        type: "FILTER_BY_ACTIVITY",
        payload
    }
}

export const orderByName = (payload) => {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
};

export const orderByPopulation = (payload) => {
    return {
        type: "ORDER_BY_POPULATION",
        payload
    }
};

export const getDetails = (id) => {
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: "GET_DETAILS",
            payload: json.data
        })
    }
};

export const postActivities = (payload) => {
    return async function(dispatch){
        let json = await axios.post("http://localhost:3001/activities", payload)
        console.log(json)
        return dispatch({
            type: "POST_ACTIVITY"
        })
    }
}


