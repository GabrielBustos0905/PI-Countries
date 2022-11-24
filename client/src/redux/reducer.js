const initialState = {
    countries: [],
    allCountries: [],
    detail: [],
    activities: [],
    error: []
};

const rootReducer = (state = initialState, action) => {
    const allCountries = state.allCountries;
    const actualCountries = state.countries;

    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
                error: []
            }

        case 'GET_ACTIVITIES':
            return{
                ...state,
                activities: action.payload,
                allActivities: action.payload
            }

        case 'GET_NAME_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                error: []
            }
        
        case 'FILTER_BY_CONTINENT':
            const continentFiltered = action.payload === "All" ? allCountries : allCountries.filter(c => c.continent === action.payload)

            return {
                ...state,
                countries: continentFiltered
            }

        case "FILTER_BY_ACTIVITY":
            const findCountries = allCountries.filter(c => c.activities.length > 0 ? c.name : null)
            console.log(findCountries)
            const activityFiltered = action.payload === "All" ? allCountries : findCountries.filter(c => c.activities.find(a => a.name === action.payload));

            return{
                ...state,
                countries: activityFiltered
            }

        case 'ORDER_BY_NAME':

            const sortedArray = action.payload === "Upward" ? actualCountries.sort(function(a, b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0
            }) : actualCountries.sort(function(a, b){
                if(a.name > b.name) return -1
                if(b.name > a.name) return 1
                return 0
            })

            return {
                ...state,
                countries: sortedArray
            }
        
        case 'ORDER_BY_POPULATION':
            
            const poblationArray = action.payload === "Min" ? actualCountries.sort(function(a, b){
                if(a.population > b.population) return 1;
                if(b.population > a.population) return -1;
                return 0
            }) : actualCountries.sort(function(a, b){
                if(a.population > b.population) return -1
                if(b.population > a.population) return 1
                return 0
            })

            return {
                ...state,
                countries: poblationArray
            }

        case "GET_DETAILS":
            return{
                ...state,
                detail: action.payload
            }

        case "GET_NAME_ERROR":
            return{
                ...state,
                error: action.payload,
                countries: []
            }

        case "POST_ACTIVITY":
            return {
                ...state
            }

        default:
            return state
    }
};

export default rootReducer