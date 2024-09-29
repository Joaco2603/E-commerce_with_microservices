import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';
import cartRoutes from "./routes/cart.routes";
import orderRoutes from "./routes/order.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(cartRoutes);
app.use(orderRoutes);


export default app;