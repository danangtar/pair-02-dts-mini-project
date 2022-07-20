import axios from 'axios';

const API_KEY = 'ea2afd08beecfe225e7cfd814dc2531c';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;