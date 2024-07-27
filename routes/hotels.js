import express from "express"
const router = express.Router()

//CREATE
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
    } catch (error) {
    res.status(500).json(error)
    }
})
//UPPDATE
//DELETE
//GET
//GETALL

export default router