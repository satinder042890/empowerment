const router =require("express").Router();
const userController=require("../../controllers/userController");

router.route("/")
  .post(userController.create)
//   .get(booksController.findAll);

//   router
//   .route("/:id")
//   .delete(booksController.remove);

  module.exports=router;