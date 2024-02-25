const express = require('express')
const router = express.Router()
const userController = require('../controllers/api/userController')
const playlistController = require('../controllers/api/bookmarkController')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.get ('/profile', userController.auth, userController.showUser)
router.post('/bookmark', userController.auth, bookmarkController.create)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)


module.exports = router