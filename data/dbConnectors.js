import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lasttname: {
        type: String
    },
    gender: {
        type: String
    },
    language: {
        type: String
    },
    age: {
        type: Number
    },
    emails: {
        type: String
    },
    contacts: {
        type: Array
    }
});

const Friends = mongoose.model('friends', friendSchema);
export { Friends };