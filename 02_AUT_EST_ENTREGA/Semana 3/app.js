const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
//app.use(express.static("public"));
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'dbcurriculo.db'; //use o nome que você achar melhor para o banco de dados

app.use(express.json());
app.get('/cabecalho', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT nome, cargo FROM cabecalho ORDER BY nome DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});