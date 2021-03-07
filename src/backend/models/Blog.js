const {Schema, model} = require('mongoose');

const blogSchema = new Schema({
    picture: String,
    category: String,
    tittle: String,
    post: String,
    by: {
        ref: "Users",
        type: Schema.Types.ObjectId,
    }
},
    {
        timestamps: true
       
});

module.exports = model('Blog', blogSchema);