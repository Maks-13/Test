
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

module.exports = {
    connection
};

