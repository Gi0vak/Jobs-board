const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        default: false,
    },
    logoBackground: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    contract: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    apply: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    requirements: {
        content: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
    role: {
        content: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
});


module.exports = mongoose.model("Job", JobSchema);
// id : identifiant numérique
// company : nom de la société
// logo : url du logo de la société (toujours en SVG, sans fond de couleur)
// logoBackground : couleur d'arrière plan à mettre derrière le logo
// position : nom du poste
// postedAt : quand l'annonce a été postée : date ...
// contract : type de contrat: full time, part time, ...
// location : pays du contrat
// website : url du site de la société
// apply : lien pour postuler à l'annonce ( fake url )
// description : description de l'annonce (premier paragraphe)
// requirements :
//     content : texte pour la partie Requirements
//     items : tableau pour la liste de la partie Requirements
// role :
//     content : texte pour la partie What you will do
//     items : tableau pour la liste de la partie What you will do