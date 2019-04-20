const router=require("express").Router();
const userRoutes=require("./user");
const apptRoutes=require("./scheduler");

router.use("/user",userRoutes);
router.use("/scheduler", apptRoutes);
module.exports=router;

const loginRoutes=require("./login");
router.use("/user",userRoutes);
router.use("/login",loginRoutes);
module.exports=router;
