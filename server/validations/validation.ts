import joi from 'joi';

export const newProductSchema = joi.object({
    id: joi.equal(null),
    categoryId: joi.string().required(),
    imgUrl: joi.string().required(),
    title: joi.string().required(),
    price: joi.number().min(0.01).required(),
    description: joi.string()
});

export const updateProductSchema = joi.object({
    id: joi.string().uuid(),
    categoryId: joi.string().required(),
    imgUrl: joi.string().required(),
    title: joi.string().required(),
    price: joi.number().min(0.01).required(),
    description: joi.string()
});