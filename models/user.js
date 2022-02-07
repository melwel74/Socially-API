const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: 'email address'
        },
        toJson: {
            virtuals: true
        },
        id: false
    })

    UserSchema.virtual('username').get(function(){
        return this.email.slice(0, this.email.indexOf('@'));
    });

    const User = model('User', UserSchema);
    