const router = require("express").Router();
const submissionsController = require("../../controllers/submissionsController");

router.route("/contact")
  .get(submissionsController.findAll)
  .post(submissionsController.create);

module.exports = router;
