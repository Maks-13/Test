
const mysql = require("mysql2");
let fs = require("fs");

let obj;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "HockeyShop",
    password: "Pineda2012"
})

connection.connect(function(err){
    if(err){
        return console.error("Ошибка: " + err.message);
    }else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
})

const sql = `SELECT * FROM kindsitems`;


connection.query(sql, function(err, results) {
    if(err) console.log(err);
    let data = JSON.stringify(results);
    fs.writeFile('../DataJson.json', data, 'utf-8', function(err){
        if(err) return console.log(err);
        console.log("Файл DataJson теперь содержит данные бд!");
    }); 
    console.log(results);
});
 
connection.end();


