const express = require('express');
const path = require('path');
require('dotenv').config();

//App de express
const app = express();

//Crear servidor de Node
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');

//Path publico
const publicPath = path.resolve( __dirname, 'public' );

app.use(express.static( publicPath ));

//Escuchamos si hay un error
server.listen(process.env.PORT, (err) => {

    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto num:', process.env.PORT);

});