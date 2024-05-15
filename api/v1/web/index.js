/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Sandip Vaghasiya
 */
const { Router } = require("express");
const app = Router();

const contractor = require("./contractor");

/*********** Combine all Routes ********************/
app.use("/contractor", contractor);

module.exports = app;
