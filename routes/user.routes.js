const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();

// GetUsersByType
// GetUserById
// Register

router.post('/user', UserController.Register);
router.get('/users', UserController.GetAllUsersList);
router.get('/users/:user_type', UserController.GetUsersByType);
router.get('/user/:user_id', UserController.GetUserById);
router.put('/user/:user_id', UserController.UpdateUser);
router.delete('/user/:user_id', UserController.DestroyUser);
router.get('/user/:user_id/organizations', UserController.GetOrganizationsByUser);

router.post('/user/login', UserController.Login);
router.post('/user/logout', UserController.Logout);


module.exports = router;




