import { Router } from "express";
import { pool } from "../db.js";

//Controllers
import {
  getStaffValues,
  postStaffValues,
  updateStaffValue
} from "../controllers/budget.controllers.js";

//Init Router
const router = Router();

//Routes
router.get("/budget/staff", getStaffValues);
router.post("/budget/staff", postStaffValues);
router.put("/budget/staff/:id", updateStaffValue);
// router.delete("/budget/staff:id", );


export default router;
