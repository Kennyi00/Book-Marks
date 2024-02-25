require('dotenv').config()
const Bookmark = require('../../models/bookmark')

module.exports = {
    create,
    index,
    update,
    destroy,
    jsonBookmarks,
    jsonBookmark
}

function jsonBookmark(req, res) {
    res.json(res.locals.data.bookmark)
}

function jsonBookmarks(req, res) {
    res.json(res.locals.data.bookmarks)
}

async function create(req, res, next) {
    try {
        const bookmark = await Bookmark.create(req.body)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        console.error('Error creating', error)
        res.status(400).json({ msg: error.message })
    }
}

async function index(_, res, next) {
    try {
        const bookmarks = await Bookmark.find({})
        res.locals.data.bookmarks = bookmarks
        next()
    } catch (error) {
        console.error('Error grabbing', error)
        res.status(400).json({ msg: error.message })
    }
}

async function update(req, res, next) {
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        console.error('Error updating', error)
        res.status(400).json({ msg: error.message })
    }
}

async function destroy(req, res, next) {
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        res.locals.data.bookmark = bookmark
        next()
    } catch (error) {
        console.error('Error deleting', error)
        res.status(400).json({ msg: error.message })
    }
}