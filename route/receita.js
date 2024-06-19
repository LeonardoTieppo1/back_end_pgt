const express = require('express');
const cors = require('cors');
const multer = require('multer');
const ReceitaController = require('../controller/receitaController');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Adicionando prefixo para todas as rotas
router.use('/', cors());

// Rota para buscar uma receita por nome: Get(nomeReceita)
router.get('/receita/:nome', async(req, res) => {
    try {
        const pesquisa = await ReceitaController.read(req.params.nome);
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

// Rota para buscar todas as receitas: Get:any
router.get('/receitas', async(req, res) => {
    try {
        const todos = await ReceitaController.readAny();
        res.json(todos);
    } catch (error) {
        console.error('Erro ao buscar todas as receitas:', error);
        res.status(500).json({ resultado: 'Erro interno do servidor' });
    }
});

//Rota de adicionar receitas: Post
router.post("/novaReceita", upload.single('imagem'), async (req, res) => {
    const novaReceita = req.body;
    try {
        const result = await create(novaReceita, req.file)
        res.json(result);
    } catch (error) {
        console.error("Erro ao adicionar receita")
        res.status(500).json({ resultado: "Erro interno do servidor" })
    }
});

module.exports = router;