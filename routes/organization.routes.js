const express = require('express');
const OrganizationController = require('../controllers/organization.controller');
const router = express.Router();

router.post('/organization', OrganizationController.AddOrganization);
router.get('/organizations', OrganizationController.GetAllOrganizations);

module.exports = router;

