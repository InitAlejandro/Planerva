import { Router } from "express";
import { pool } from "../../database/db.js";

//Initialize Router
const router = Router();

router.get("/structure", async (req, res) => {
  try {
    // res.send('Hello World')
    const [results, fields, err] = await pool.query("SELECT * FROM users"); //Results, Fields, Err
    res.json(results);
  } catch (error) {
    console.log(error);
  }
});

export default router;
