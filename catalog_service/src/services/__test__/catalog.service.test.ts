import { ICatalogRepository } from "../../interfaces/catalogRepository.interface";
import { MockCatalogRepository } from "../../repositorys/mockCatalog.repository";
import { CatalogService } from "../catalog.service";
import { faker } from "@faker-js/faker";

const mockProduct = (rest: any) => {
    return {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        stock: faker.number.int({ min: 1, max: 100 }),
        price: +faker.commerce.price(),
        ...rest,
    }
};


describe("catalogService", () => {
    let repository: ICatalogRepository;

    beforeEach(() => {
        repository = new MockCatalogRepository();
    });

    afterEach(() => {
        repository = {} as MockCatalogRepository;
    });

    describe("createProduct", () => {
        test("should create product", async () => {
            const service = new CatalogService(repository);

            const reqBody = mockProduct({
                price: +faker.commerce.price(),
            })

            const result = await service.createProduct(reqBody);
            expect(result).toMatchObject({
                id: expect.any(Number),
                name: expect.any(String),
                description: expect.any(String),
                price: expect.any(Number),
                stock: expect.any(Number),
            });

            expect(result.id).toBeGreaterThan(0);
            expect(result.price).toBeGreaterThan(0);
            expect(result.stock).toBeGreaterThan(0);

        });

        test("should throw error with product already exist", () => {

        });
    });
});