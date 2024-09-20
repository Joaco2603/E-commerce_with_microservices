import express from "express";
import catalogRouter from "./api/catalog.routes";

const app = express();

app.get("/", (req, res, next) => {
    return res.json({ msg: "message" });
});

app.use("/", catalogRouter);


export default app;