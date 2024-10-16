const con = require ('../connect/connect').con;

const create = (req, res) => {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let data_tarefa = req.body.data_tarefa;

    let query = 'INSERT INTO tarefa (nome,descricao,data_tarefa)VALUES'
    query += `('${nome}','${descricao}','${data_tarefa}');`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        }else{
            res.status(201).json(result)
        }
    })
}

const read = (req, res)=>{
    con.query('SELECT * FROM tarefa',(err,result)=>{
        if (err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    })
}

module.exports = {
    create,
    read
}