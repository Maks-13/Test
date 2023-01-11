let {connection} = require('./mysql.js');

const express = require("express");

let cors = require('cors');

const app = express();

app.use(cors());

process.on('SIGINT', function() {
    console.log('Do something useful here.');
    server.close();
    connection.close();
  });

app.get("/", async (request, response) => {
    connection.query('SELECT * FROM kindsitems', function(err, results){
        if(err) console.log(err);
        response.send(results);
    }
)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));