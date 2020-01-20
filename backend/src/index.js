const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://daniellasalles:omnistack@cluster0-shard-00-00-4atc6.mongodb.net:27017,cluster0-shard-00-01-4atc6.mongodb.net:27017,cluster0-shard-00-02-4atc6.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: get, post, put, delete

// Tipo de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)



server.listen(3333);