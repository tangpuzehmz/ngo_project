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
// router.put('/organization/:organization_id', OrganizationController.UpdateOrganization);
// router.delete('/organization/:_id', OrganizationController.DeleteOrganization);

module.exports = router;



