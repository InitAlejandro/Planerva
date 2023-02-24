import { Router } from "express";
import { pool } from "../db.js";

//Initialize Router
const router = Router();

router.get("/structure", async (req, res) => {
  try {
    // res.send('Hello World')
    const [results, fields, err] = await pool.query("SELECT * FROM users"); //Results, Fields, Err
    res.json(results);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
});

export default router;
