const mongoose = require('mongoose')

const BugSchema = new mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
})

const Bugdata = mongoose.model("bug", BugSchema)


module.exports = {Bugdata}