import { CartRepositoryType } from "../types/repository.type";
import { CartCreateDtoInput } from "../dto/cartRequest.dto";
import { GetProductDetails } from "../utils/broker";

export const CreateCart = async (input: CartCreateDtoInput, repo: CartRepositoryType) => {

    //Make a call to our catalog microservice
    //synchronize call
    const product = await GetProductDetails(input.productId);

    if (product.stock < input.qty) {
        throw new Error("Product is out of stock");
    }

    const data = await repo.create(input);
    return data;
}

export const GetAllCarts = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.find(input);
    return data;
}

export const GetCart = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.find(input);
    return data;
}

export const UpdateCart = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.update(input);
    return data;
}

export const DeleteCart = async (input: any, repo: CartRepositoryType) => {
    const data = await repo.delete(input);
    return data;
}