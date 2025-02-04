const express = require("express");
const { searchUser, getUserDetails, getRepoDetails } = require("../controllers/githubController");

const router = express.Router();

router.get("/search", searchUser);
router.get("/user/:username", getUserDetails);
router.get("/repo/:username/:repo", getRepoDetails);

module.exports = router;



