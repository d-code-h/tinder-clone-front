import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL,
  url: process.env.API_URL,
});
