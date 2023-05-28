const axios = require('axios');
const arrToString = require('../arrToString/arrToString');

const getData = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersId = response.data.map(users => users.id);
        return arrToString(usersId);
    }
    catch (e) {

    }
};

module.exports = getData;