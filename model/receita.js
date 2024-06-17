const mongoose= require('mongoose')

const receitaSchema=mongoose.Schema({
    nome:{type: String},
    ingredientes:[{nome:{type:String},quantidade:{type:Number}}],
    modo_preparo:{type:Array},
    calorias:{type:Number},
    porções:{type:Number},
    tipo:{type:String},
    nutrientes:[{nome:{type:String},quantidade:{type:Number}}],
    imagem:{type:Buffer,contentType:string}

})

const Receita = mongoose.model('receitas2',receitaSchema,'receitas2')


module.exports= Receita;