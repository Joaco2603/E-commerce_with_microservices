import { PrismaClient } from "@prisma/client";
import { ICatalogRepository } from "../interfaces/catalogRepository.interface";
import { Product } from "../models/product.model";


export class CatalogRepository implements ICatalogRepository {
    _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient();
    }

    async create(data: Product): Promise<Product> {
        try {
            return this._prisma.product.create({ data });
        } catch (error) {
            throw new Error('Cannot created product');
        }
    }
    update(data: Product): Promise<Product> {
        return this._prisma.product.update({
            where: { id: data.id },
            data,
        });
    }
    async delete(id: number): Promise<{ message: string; }> {
        try {
            const deletedProduct = this._prisma.product.delete({
                where: { id },
            });

            if (!deletedProduct)
                throw new Error('User not found, cannot delete');

            return Promise.resolve({ message: `Product with ${id} delete` });
        } catch (error) {
            throw new Error(`Product cannot delete`);
        }
    }
    async findOne(id: number): Promise<Product> {
        const product = await this._prisma.product.findFirst({
            where: { id },
        });

        if (!product) {
            throw new Error('Product Not found');
        }

        return product;
    }
    async find(limit: number, offset: number): Promise<Product[]> {
        return this._prisma.product.findMany({
            take: limit,
            skip: offset
        });
    }
}