const { model, Schema } = require('mongoose')

const bookmarkSchema = new Schema ({
    title: { type: String, required: true  },
    url: { type: String, required: true }
})

module.exports = model('Bookmark', bookmarkSchema)