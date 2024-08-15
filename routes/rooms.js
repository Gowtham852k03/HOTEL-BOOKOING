import express from "express"
import { verifyadmin } from "../utils/verifyToken.js"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js"
const router = express.Router()

//CREATE
router.post("/",verifyadmin, createRoom)
//UPPDATE
router.put("/:id",verifyadmin, updateRoom)
//DELETE
router.delete("/:id",verifyadmin, deleteRoom)
//GET
router.get("/:id",getRoom);
//GETALL
router.get("/",getRooms)

export default router