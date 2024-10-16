const express =  require('express')
const router = express.Router();

const tarefa = require('./controllers/tarefa')

const teste =(req,res) => {
    res.json("Respondendo");
}

router.get('/',teste);
router.post('/tarefa',tarefa.create);
router.get('/tarefa',tarefa.read);

module.exports = router;