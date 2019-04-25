const router =require("express").Router();
const contactController=require("../../controllers/contactController");

router.route("/:id")
.post(contactController.update)
module.exports=router;