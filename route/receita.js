const express = require('express');
const cors = require('cors');
const ReceitaController = require('../controller/receitaController');
const router = express.Router();

// Adicionando prefixo para todas as rotas
router.use('/', cors());

// Rota para buscar uma receita por nome
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

// Rota para buscar todas as receitas
router.get('/receitas', async(req, res) => {
    try {
        const todos = await ReceitaController.readAny();
        res.json(todos);
    } catch (error) {
        console.error('Erro ao buscar todas as receitas:', error);
        res.status(500).json({ resultado: 'Erro interno do servidor' });
    }
});

module.exports = router;
