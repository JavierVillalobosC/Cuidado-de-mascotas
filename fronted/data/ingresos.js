import axios from 'axios';

const getIngresos = async (id) => {
    const response = await axios.get(`${process.env.API_URL}/ingresos`)
    return response
}

module.exports = {
    getIngresos,
    
}