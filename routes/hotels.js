import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyadmin} from "../utils/verifyToken.js";

const router = express.Router()

//CREATE
router.post("/",verifyadmin, createHotel)
//UPPDATE
router.put("/:id",verifyadmin, updateHotel)
//DELETE
router.delete("/:id",verifyadmin, deleteHotel)
//GET
router.get("/:id",getHotel);
//GETALL
router.get("/",getHotels)

export default router