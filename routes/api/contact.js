const router =require("express").Router();
const contactController=require("../../controllers/contactController");

router.route("/:id")
  .post(contactController.create)
  .get(contactController.findById)
  
router.route("/:number/:message")
.get(contactController.sendData);
  module.exports=router;