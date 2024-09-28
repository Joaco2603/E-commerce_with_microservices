import express, { NextFunction, Request, Response } from "express";
import { CatalogService } from "../services/catalog.service";
import { CatalogRepository } from "../repositorys/catalog.repository";
import { RequestValidator } from "../utils/requestValidator";
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";

const router = express.Router();

export const catalogService = new CatalogService(new CatalogRepository());

router.post(
    "/products",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { errors, input } = await RequestValidator(
                CreateProductDto,
                req.body
            );

            if (errors) return res.status(400).json(errors);
            const data = await catalogService.createProduct(input);
            return res.status(201).json(data);
        } catch (error) {
            const err = error as Error;
            return res.status(500).json(err.message);
        }
    }
);

router.patch(
    "/products/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { errors, input } = await RequestValidator(
                UpdateProductDto,
                req.body
            );

            const id = parseInt(req.params.id) || 0;

            if (errors) return res.status(400).json(errors);

            const data = await catalogService.updateProduct({ id, ...input });
            return res.status(200).json(data);
        } catch (error) {
            const err = error as Error;
            return res.status(500).json(err.message);
        }
    }
);


router.get("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { limit, offset } = req.query;

        const data = await catalogService.getAllProducts(Number(limit) | 0, Number(offset) | 0);
        return res.status(200).json(data);
    } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message);
    }
});


router.get("/products/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const data = await catalogService.getProduct(Number(id));
        return res.status(200).json(data);
    } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message);
    }
});

router.delete("/products/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const data = await catalogService.deleteProduct(Number(id));
        return res.status(200).json(data);
    } catch (error) {
        const err = error as Error;
        return res.status(500).json(err.message);
    }
});

export default router;