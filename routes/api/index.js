const router=require("express").Router();
const userRoutes=require("./user");
const apptRoutes=require("./appts");

router.use("/user",userRoutes);
router.use("/scheduler", apptRoutes);
module.exports=router;