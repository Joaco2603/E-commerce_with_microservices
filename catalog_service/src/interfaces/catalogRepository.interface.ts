import { Product } from "../models/product.model"

export interface ICatalogRepository {
    create(data: Product): Promise<Product>
    update(data: Product): Promise<Product>
    delete(id: number): Promise<{ message: string }>
    findOne(id: number): Promise<Product>
    find(limit?: number, offset?: number): Promise<Product[]>
}