import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import budgetRoutes from "./routes/budget.routes.js";

//Initialize App
const app = express();

//Seetings

//Middlewares

//Routes
app.use(indexRoutes);
app.use(budgetRoutes);

//Listen Port
app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
