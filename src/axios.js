import axios from 'axios';

const instance =axios.create({
    baseURL:'https://tinder-backend999.herokuapp.com'
})

export default instance;