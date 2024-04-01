const mongoose = require('mongoose');
const Receita = require('../model/receita');

const read = async (nomeReceita) => {
    try {
        const receita = await Receita.findOne({ nome_receita: nomeReceita }).exec();
        return receita;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

const readAny = async () => {
    try {
        const receitas = await Receita.find().exec();
        return receitas;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    read,
    readAny
};
