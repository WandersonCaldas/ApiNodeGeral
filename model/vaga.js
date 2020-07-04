const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VagaSchema = new Schema({
    cod_vaga: { type: Number, required: true },
    txt_titulo: { type: String, required: true },
    txt_vaga: { type: String, required: true },
    cod_ativo: { type: Number, required: true }
}, {collection: 'tbl_vagas_geral'});

module.exports = mongoose.model('Vaga', VagaSchema);