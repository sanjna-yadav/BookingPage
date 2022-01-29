const mongoose = require('mongoose')
const { Schema } = mongoose;

const tourSchema = new Schema({
    date: {
        type: Date,
        // required: [true, 'Person needs to have a name']
    },
    type: {
        type: String,
        required: [true, 'It is a required field.']
    },
    adults: {
        type: Number,
        required: [true, 'It is a required field.']
    },
    child: {
        type: Number,
        required: [true, 'It is a required field.']
    },
    description: {
        type: String,
    }
})


const Tour = mongoose.model('Tour', tourSchema)
module.exports = Tour;