const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarkController')

router.get('/', bookmarkCtrl.index, bookmarkCtrl.jsonBookmarks)
router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonBookmark)
router.put('/:id', bookmarkCtrl.update, bookmarkCtrl.jsonBookmark)
router.delete('/:id', bookmarkCtrl.destroy, bookmarkCtrl.jsonBookmark) 

module.exports = router