import { send } from "vite";
import { pool } from "../db.js";

//Staff Values
const getStaffValues = async (req, res) => {
  try {
    //Authenticate before completing request
    const [results] = await pool.query(
      "SELECT * FROM budgetpersonal INNER JOIN budgetpersonalvalues ON budgetpersonalvalues.id = budgetpersonal.id;"
    );
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const postStaffValues = async (req, res) => {
  try {
    let account;
    const {
      area,
      position,
      classing,
      refsalary,
      incsalary,
      auxtransport,
      workersneeded,
    } = req.body;

    account = 7205;
    //account === "MOD" ? 7205 : account === "MOI" ? 7305 : ;

    //Post to budgetstaff
    const [resultBudget] = await pool.query(
      "INSERT INTO budgetpersonal (area, position, classing, account) VALUES(?, ?, ?, ?)",
      [area, position, classing, account]
    );
    //Post to budgetstaffvalues
    const [resultBudgetValues] = await pool.query(
      "INSERT INTO budgetpersonalvalues (refsalary, incsalary, auxtransport, workersneeded, personalid) VALUES(?, ?, ?, ?, ?)",
      [refsalary, incsalary, auxtransport, workersneeded, resultBudget.insertId]
    );
    res.status(200).json({ input: resultBudget.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateStaffValue = async (req, res) => {
  try {
    const positionId = req.params.id;
    let account = 5277;
    const {
      area,
      position,
      classing,
      refsalary,
      incsalary,
      auxtransport,
      workersneeded,
    } = req.body;

    // //Post to budgetstaff
    // const [resultBudget] = await pool.query(
    //   `UPDATE budgetpersonal SET (area, position, classing, account) VALUES(?, ?, ?, ?) WHERE id = ${positionId}`,
    //   [area, position, classing, account]
    // );
    // //Post to budgetstaffvalues
    // const [resultBudgetValues] = await pool.query(
    //   `UPDATE budgetpersonalvalues SET (refsalary, incsalary, auxtransport, workersneeded, personalid) VALUES(?, ?, ?, ?, ?) WHERE personalid = ${positionId}`,
    //   [refsalary, incsalary, auxtransport, workersneeded, positionId]
    // );

    res.send("Todo bien mi perro");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getStaffValues, postStaffValues, updateStaffValue };
