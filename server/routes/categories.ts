import { Request, Response, NextFunction, Router } from 'express';
import { Category } from '../models/Category'

const router = Router();

const categories: Category[] = [
    {
        id: "1",
        title: "Computers"
    },
    {
        id: "2",
        title: "Hardwares"
    },
    {
        id: "3",
        title: "Monitors"
    }
];

router.get('/', (req: Request, res: Response) => {
    res.send(categories);
});

export { router };