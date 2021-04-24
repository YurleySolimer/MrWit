const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    rol: {
        ref: "Roles",
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

 
module.exports = model('User', userSchema);