const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>SITE ATIVIDADE AWS</h1>");
})

//rota do cadastro de produtos
app.get("/rota1", function(req,res){
    res.send("<h1>rota 1 da atividade</h1>");
})

//rota com parametro 
app.get("/rota2/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("rota2 consulta:" + req.params.parametro);
})

//rota com parametro opcional
app.get("/rota3/:nome?", function(req,res){
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>rota 3 da atividade AWS " + nome + " criado!</h1>");
    }else{
        res.send("produto criado!");
    }
    
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

