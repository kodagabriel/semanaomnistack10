const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController');

const routes = Router();

//dev

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// search

routes.get('/search', SearchController.index);

module.exports = routes;


// get, post, put, delete

//Tipos de parametros

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção
//Body: request.body (Dados para criação ou alteração de um registro)