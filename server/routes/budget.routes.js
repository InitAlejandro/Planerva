import { Router } from "express";
import { pool } from "../db.js";

//Controllers
import {hello} from "../controllers/budget.controllers.js"

//Init Router
const router = Router()

//Routes
router.get("/task", hello);
// router.post();
// router.delete();
// router.update();

export default router