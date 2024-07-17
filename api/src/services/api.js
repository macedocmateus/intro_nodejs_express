import axios from 'axios'; // biblioteca para fazer requisições HTTP

export const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.get('/users/:id');
