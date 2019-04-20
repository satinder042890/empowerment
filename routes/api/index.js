const router=require("express").Router();
const apptRouter=require("express").Router();
const userRoutes=require("./user");
const apptRoutes=require("./scheduler");

router.use("/user",userRoutes);
apptRouter.use("/scheduler", apptRoutes);
module.exports=router;
module.exports=apptRouter;