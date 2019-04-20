const apptRouter = require("express").Router();
const apptsController = require("../../controllers/apptsController");

// Matches with "/api/books"
apptRouter.route("/api/scheduler")
  .get(apptsController.findAll)
  .post(apptsController.create);

// Matches with "/api/books/:id"
apptRouter
  .route("/api/scheduler/:id")
  .get(apptsController.findById)
  .delete(apptsController.remove);

module.exports = apptRouter;

//request all appts
