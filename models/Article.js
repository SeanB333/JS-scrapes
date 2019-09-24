const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const AtricleSchema = new Schema({
    title:{
        type: String,
        required: false 
    },

    summary:{
        type: String,
        required: false
    },

    link:{
        type: String,
        required: false
    }
});

const Article = mongoose.model("Article", AtricleSchema);

module.exports = Article;
