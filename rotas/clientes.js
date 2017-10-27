module.exports = function(server,connectDB,bodyParser){
    //Rota clientes
server.get('/clientes', function(req,res){
    connectDB.query('select * from clientes', function(error,results,fields){
        if(error) throw error;
        res.json(results)
    })
})

server.get('/clientes/:id', function(req,res){

    var id = req.params.id

    connectDB.query('select * from clientes where id =' + id, function(error,results,fields){
        if(error) throw error;
        res.json(results)
    })
})

server.post('/clientes', function(req,res){

    var postData = req.body
    
    var nome = postData.sendNome
    var sobrenome = postData.sendSobrenome

    console.log(nome)
    console.log(sobrenome)

    connectDB.query('insert into clientes (nome,cpf) values (?,?)', [nome,sobrenome], function(error,results){
        if(error) throw error;
        res.send(`O usuario ${nome} ${sobrenome} foi adicionado ao banco de dados!`)
    })

})

}