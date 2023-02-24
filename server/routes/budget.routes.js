import { Router } from "express";
import { pool } from "../db.js";

//Controllers
import {hello} from "../controllers/budget.controllers.js"

//Init Router
const router = Router()

//Routes
router.get("/hello", hello);

export default router