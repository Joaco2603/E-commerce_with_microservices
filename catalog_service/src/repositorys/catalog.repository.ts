import { ICatalogRepository } from "../interfaces/catalogRepository.interface";
import { Product } from "../models/product.model";


export class CatalogRepository implements ICatalogRepository {
    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(data: Product): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    delete(data: Product): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    findOne(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}