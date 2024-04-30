const mongoose= require('mongoose')

const receitaSchema=mongoose.Schema({

    nome_receita:{type: String}
})

const Receita = mongoose.model('receitas_teste',receitaSchema,'receitas_teste')

module.exports= Receita;