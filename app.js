const port = 3000;
const express = require('express')
const bodyParser = require(`body-parser`)
const server = express()
const cors = require('./infra/cors')(server)
const connectDB = require('./infra/connectBanco')()

//configurando o body parser para pegar POSTS mais tarde
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const rotas = require('./rotas/clientes')(server,connectDB,bodyParser)


//CONNECT SERVER
server.listen(port,function(){
    console.log(`server is running on port ${port}`)
})