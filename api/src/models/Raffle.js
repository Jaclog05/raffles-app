const {Schema, model} = require('mongoose')

const RaffleSchema = new Schema({
    numTickets: {
        type: Number,
        require: true
    },
    prize: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    lotery: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

module.exports = model('Raffle', RaffleSchema)