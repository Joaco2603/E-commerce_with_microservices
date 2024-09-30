import { Static, Type } from "@sinclair/typebox"

export const CartCreateDto = Type.Object({
    productId: Type.Integer(),
    customerId: Type.String(),
    qty: Type.Integer()
});


export type CartCreateDtoInput = Static<typeof CartCreateDto>;

export const CartUpdateDto = Type.Object({
    id: Type.Integer(),
    qty: Type.Integer()
});


export type CartUpdateDtoInput = Static<typeof CartUpdateDto>;
