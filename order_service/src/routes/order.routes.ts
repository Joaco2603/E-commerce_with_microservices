import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.post(
    "/order",
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ message: "create order" });
        next();
    }
);

router.get(
    "/order",
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ message: "create order" });
        next();
    }
);

router.get(
    "/order/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ message: "create order" });
        next();
    }
);

router.delete(
    "/order/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ message: "create order" });
        next();
    }
);

export default router;