const router = require("express").Router();
const apptsController = require("../../controllers/apptsController");

// Matches with "/api/books"
router.route("/:id")
.post(apptsController.create)
  .get(apptsController.findById);

// Matches with "/api/books/:id"
// router.route("/scheduler/:id")
//   .get(apptsController.findById)
//   .delete(apptsController.remove);


module.exports = router;

//request all appts
