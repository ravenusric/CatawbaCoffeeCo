const router = require("express").Router();
const submissionsController = require("../../controllers/submissionsController");

router.route("/")
.post(submissionsController.create);

module.exports = router;
