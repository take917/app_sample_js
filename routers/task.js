const express = require("express")
const router = express.Router()

const { getAlltasks,createTask,getSingleTask,updatetasks,deletetasks} = require("../controllers/tasks")

router.get("/",getAlltasks)
router.post("/",createTask)
router.get("/:id",getSingleTask)
router.patch("/:id",updatetasks)
router.delete("/:id",deletetasks)

module.exports = router;