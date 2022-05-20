import axios from "axios";

const fetcher = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export default fetcher;