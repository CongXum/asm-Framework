import axios from "axios";
import { APIURL } from "../environments/environment.js";
import { API_ENDPOINT } from "../config/api-endpoint.config.js";

export class Products {
    constructor() {

    }

    list() {
        // return axios.get('http://localhost:3000/categories');
        return axios.get(APIURL + API_ENDPOINT.PRODUCTS);
    }

    create(data) {
        return axios.post(APIURL + API_ENDPOINT.PRODUCTS, data);
    }

    updated(id, data) {
        return axios.put(APIURL + API_ENDPOINT.PRODUCTS + '/' + id, data);
    }

    getById(id) {
        return axios.get(APIURL + API_ENDPOINT.PRODUCTS + `/${id}`);
    }

    delete(id) {
        return axios.delete(APIURL + API_ENDPOINT.PRODUCTS + '/' + id);
    }
}