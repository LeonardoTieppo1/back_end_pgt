const express = require('express');
const cors = require('cors');
const ReceitaController = require('../controller/receitaController');
const router = express.Router();

router.use(cors()); // Correção na utilização do middleware cors

router.get('/receita/:nomeReceita', async (req, res) => {
    try {
        const pesquisa = await ReceitaController.read(req.params.nomeReceita);
        if (pesquisa) {
            res.json({ resultado: 'Consulta realizada com sucesso', receita: pesquisa });
        } else {
            res.status(400).json({ resultado: 'Erro no título da receita' });
        }
    } catch (error) {
        console.error('Erro ao buscar receita:', error);
        res.status(500).json({ resultado: 'Erro interno do servidor' });
    }
});

router.get('/receitas', async(req, res) => {
    const todos = await ReceitaController.readAny()
    res.json(todos)
})

module.exports = router;
