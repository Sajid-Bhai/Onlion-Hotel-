const express = require('express');
const router = express.Router();
const ErrorHandler = require("../utility func/ErrorHandler");
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');
const userController=require('../controllers/user');

router.get("/signup", userController.renderSignupForm);
router.post("/signup", ErrorHandler(userController.signup));
router.get("/login", userController.renderLoginForm);
router.post("/login", saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true, }), userController.login);
router.get("/logout",userController.logout);

module.exports = router;