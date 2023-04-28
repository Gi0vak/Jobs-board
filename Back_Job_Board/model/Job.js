const mongoose = require("mongoose");

// definition du schema JSON
const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: false,
    },
    logo: {
        type: String,
        default: "https://i.postimg.cc/zD6trrNG/Ue-Tu-X5-Pk-male-6-cartoon8.png"

    },
    logoBackground: {
        type: String,
        required: false,
    },
    position: {
        type: String,
        required: false,
    },
    postedAt: {
        type: Date,
        default: Date.now,
    },
    contract: {
        type: String,
        required: false,
        default: "Full-time",
    },
    location: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    apply: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    requirements: {
        content: {
            type: String,
            required: false,
        },
        items: {
            type: Array,
            required: false,
        },
    },
    role: {
        content: {
            type: String,
            required: false,
        },
        items: {
            type: Array,
            required: false,
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