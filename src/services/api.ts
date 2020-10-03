import axios from 'axios'

export const swapi = () => axios.create({
  baseURL:'https://swapi.dev/api/'
});

export const localhost = () => axios.create({
  baseURL:'http://localhost:3005/'
});
