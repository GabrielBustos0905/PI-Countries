const axios = require('axios');
const { Country, Activity } = require('../db');


const api = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(country => {
        return {
            id : country.cca3,
            name : country.name.common,
            flag : country.flags[0],
            continent : country.continents != null ? country.continents[0] : 'No hay datos',
            capital : country.capital != null ? country.capital[0] : 'No hay datos',
            subregion : country.subregion ? country.subregion : 'No hay datos',
            area : country.area,
            population : country.population
        }
    });

    return apiInfo
};

const data = async () => {

    const apiData = await api();

    if(apiData.length > 0) return apiData

    apiData.forEach(c => {
        Country.findOrCreate({
            where: {
                id : c.id,
                name : c.name,
                flag : c.flag,
                continent : c.continent,
                capital : c.capital,
                subregion : c.subregion,
                area : c.area,
                population : c.population
            }
        })
    })
};

const findById = async (id) => {
    const response = await Country.findByPk(id.toUpperCase(), {include: {
        model: Activity,
        attributes: ['name', 'dificulty', 'duration', 'season'],
        through:{
            attributes: []
        }
    }});
    if (!response) throw new Error('No existe country con dicho ID');

    return response;
};

const findByName = async (country) => {
    const countries = await Country.findAll();
    const response = await countries.filter(c => c.name.toLowerCase().includes(country.toLowerCase().replaceAll('%20', ' ')));

    if(response.length) return response 
    else throw new Error('Country con dicho nombre, inexistente');
};

const createActivity = async (country, name, dificulty, duration, season) => {
    if(country && name && dificulty && duration && season){
        if(dificulty < 0 || dificulty > 5) throw new Error('Ingrese una dificultad valida (Entre 1 y 5)');
        if(country.length === 0) throw new Error("Error! Countries necesarios.");

        const nombre = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
        }

        const response = await Activity.findOne({
            where: {
                name: nombre(name)
            }
        })

        if(response) throw new Error("Error! Ya existe dicha actividad.")
        

        const newActivity = await Activity.create({
            name: nombre(name),
            dificulty,
            duration,
            season
        });

        const countriesActivity = await Country.findAll({
            where: {
                name: country
            }
        })

        newActivity.addCountry(countriesActivity)

        return `Actividad ${nombre(name)} creada con exito :D`
    };

    throw new Error('Faltan parametros')
};

module.exports = {
    data,
    findById,
    findByName,
    createActivity,
}