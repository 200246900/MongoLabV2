var mongoose = require('mongoose');
// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title is required'
    },
    content: {
        type: String,
        default: '',
        trim: true
    }
});
// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
exports.user = mongoose.model('user', userSchema);

//# sourceMappingURL=user.js.map
