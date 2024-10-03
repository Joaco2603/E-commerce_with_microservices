import { Router, NextFunction, Request, Response } from "express";
import * as service from "../service/cart.service";
import * as repository from "../repository/cart.repository";
import { ValidateRequest } from "../utils/validator";
import { CartCreateDto, CartCreateDtoInput } from "../dto/cartRequest.dto";

const router = Router();
const repo = repository.CartRepository;

router.post("/cart", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const error = ValidateRequest<CartCreateDtoInput>(
            req.body,
            CartCreateDto
        )

        if (error) {
            res.status(402).json({ error });
            return;
        }

        const response = await service.CreateCart(req.body as CartCreateDtoInput, repo);
        res.status(200).json(response);
        next();
    } catch (error) {
        res.status(404).json({ error });
    }
});

router.get("/cart/:id", async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: "Create cart" });
    next();
});

router.get("/cart", async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.GetAllCarts(req.body, repo);
    res.status(200).json(response);
    next();
});

router.patch("/cart", async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.UpdateCart(req.body, repo);
    res.status(200).json({ message: "Create cart" });
    next();
});

router.delete("/cart/:id", async (req: Request, res: Response, next: NextFunction) => {
    const response = await service.DeleteCart(req.body, repo);
    res.status(200).json(response);
    next();
});


export default router;