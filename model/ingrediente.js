const mongoose= require('mongoose')

const ingredienteSchema=mongoose.Schema({

    title:{type:string}
})

const ingrediente = mongoose.model("Receita",ingredienteSchema)

module.exports = ingrediente;