const mysql = require('mysql')

module.exports = function(connection){
    //connect no banco
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'gabriel00',
    database : 'gabriel'
});

return connection;
}