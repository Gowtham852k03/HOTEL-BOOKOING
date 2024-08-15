import express from "express"
const router = express.Router()
import {  deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import {verifyToken , verifyuser, verifyadmin} from "../utils/verifyToken.js";


router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})
router.get("/checkuser/:id", verifyuser, (req, res, next) => {
    res.send("hello user, you are logged in amd uou can delete account")
})
router.get("/checkadmin/:id", verifyadmin, (req, res, next) => {
    res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPPDATE
router.put("/:id", verifyuser,updateUser)
//DELETE
router.delete("/:id",verifyuser, deleteUser)
//GET
router.get("/:id",verifyuser,getUser);
//GETALL
router.get("/",verifyadmin,getUsers)

export default router