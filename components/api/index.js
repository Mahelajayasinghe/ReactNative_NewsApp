import axios from "axios";
import { BASEURL, APIKEY } from "../Utils/constants";

const api = axios.create({
    baseURL: BASEURL,
    headers: {Authorization: APIKEY},
});

const getHeadLines = (payload) => api.get('/top-headlines?country=us');

export default {
    getHeadLines,
};