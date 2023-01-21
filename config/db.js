const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const url = `mongodb+srv://sudiptadip:sudipta12dip@cluster0.3yv6bgv.mongodb.net/?retryWrites=true&w=majority`

const connection = mongoose.connect(url)

module.exports = {connection}