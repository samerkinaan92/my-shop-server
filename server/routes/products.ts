import { Request, Response, NextFunction, Router } from 'express';
import { Product } from '../models/Product';
import uuidv1 from 'uuid/v1';
import { newProductSchema, updateProductSchema } from '../validations/validation';
import joi from 'joi';

const router = Router();

const products: Product[] = [
    {
        id: '0',
        categoryId: '1',
        imgUrl: '../../assets/img/pc.jpg',
        title: 'PC1',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '1',
        categoryId: '1',
        imgUrl: '../../assets/img/pc.jpg',
        title: 'PC1',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '2',
        categoryId: '1',
        imgUrl: '../../assets/img/pc.jpg',
        title: 'PC1',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '3',
        categoryId: '2',
        imgUrl: '../../assets/img/gpu.jpg',
        title: 'GPU',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '4',
        categoryId: '2',
        imgUrl: '../../assets/img/gpu.jpg',
        title: 'GPU',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '5',
        categoryId: '2',
        imgUrl: '../../assets/img/gpu.jpg',
        title: 'GPU',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '6',
        categoryId: '3',
        imgUrl: '../../assets/img/monitor.jpg',
        title: 'monitor',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '7',
        categoryId: '3',
        imgUrl: '../../assets/img/monitor.jpg',
        title: 'monitor',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '8',
        categoryId: '3',
        imgUrl: '../../assets/img/monitor.jpg',
        title: 'monitor',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '9',
        categoryId: '3',
        imgUrl: '../../assets/img/monitor.jpg',
        title: 'monitor',
        price: 200,
        description: 'i7 8GB'
    },
    {
        id: '10',
        categoryId: '3',
        imgUrl: '../../assets/img/monitor.jpg',
        title: 'monitor',
        price: 200,
        description: 'i7 8GB'
    }
];

router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;

    const matchingProduct = products.find(product => {
        return product.id === id;
    });

    if (matchingProduct === undefined) {
        res.sendStatus(404);
    }

    res.send(matchingProduct);
});

router.get('/', (req: Request, res: Response) => {
    res.send(products);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    
    const product: Product = req.body;

    const { error, value } = joi.validate(product, newProductSchema);
    if (error) {
        next(error);
        return;
    }

    product.id = uuidv1();
    products.push(product);
    res.status(201).send(product);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const product: Product = req.body;

    const matchingIndex = products.findIndex(product => {
        return product.id === id;
    });

    if (matchingIndex < 0) {
        res.sendStatus(404);
    }

    const { error, value } = joi.validate(product, updateProductSchema);
    if (error) {
        next(error);
    }

    products[matchingIndex] = product;
    res.status(201).send(product);
});


export { router };