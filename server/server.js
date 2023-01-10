require('./mysql.js');

const fs = require('fs');

const express = require("express");

let cors = require('cors');

// создаем приложение
const app = express();

app.use(cors());

// устанавливаем обработчик для маршрута "/"
app.get("/", async (request, response) => {
    fs.readFile('../DataJson.json', 'utf8', (err, data) => {
        if (err) return console.log('File read failed: ', err);
        response.send(data);
    });
});

// начинаем прослушивание подключений на 3000 порту
const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));