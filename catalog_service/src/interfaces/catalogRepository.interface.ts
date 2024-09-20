import { Product } from "../models/product.model"

export interface ICatalogRepository {
    create(data: Product): Promise<Product>
    update(data: Product): Promise<{}>
    delete(data: Product): Promise<{}>
    findOne(data: Product): Promise<Product>
    find(): Promise<Product[]>
}