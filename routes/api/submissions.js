const router = require("express").Router();
const submissionsController = require("../../controllers/submissionsController");

router.route("/")
  .get(submissionsController.findAll)
  .post(submissionsController.create);

// router
//   .route("/:id")
//   .get(submissionsController.findById)
//   .put(submissionsController.update)
//   .delete(submissionsController.remove);

module.exports = router;
