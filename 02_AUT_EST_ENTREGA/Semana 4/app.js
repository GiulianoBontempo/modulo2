const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
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
app.get('/cabecalhoget', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM cabecalho ORDER BY nome DESC';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/cabecalhopost', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO cabecalho (nome, cargo) VALUES ('" + req.body.nome + "', '" + req.body.cargo + "')";
    console.log(sql);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
    res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/cabecalhoupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "UPDATE cabecalho SET nome='" + req.body.nome + "' WHERE cabecalho_ID='" + req.body.cabecalho_ID + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    res.write('<p>USUARIO ATUALIZADO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
});

  // Exclui um registro (é o D do CRUD - Delete)
  app.get('/cabecalhodelete', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM cabecalho WHERE cabecalho_ID='" + req.body.cabecalho_ID + "'";
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.write('<p>USUARIO REMOVIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
        res.end();
    });
    db.close(); // Fecha o banco
});