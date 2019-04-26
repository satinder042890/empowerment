const router=require("express").Router();
const userRoutes=require("./user");
const apptRoutes=require("./scheduler");
const contactRoutes=require("./contact");
const loginRoutes=require("./login");
router.use("/user",userRoutes);
router.use("/scheduler", apptRoutes);
router.use("/contact",contactRoutes);
// module.exports=router;


// router.use("/user",userRoutes);
router.use("/login",loginRoutes);
module.exports=router;
