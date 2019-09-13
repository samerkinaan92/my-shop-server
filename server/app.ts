import express from 'express';
import path from 'path';
import cors from 'cors';
import { router as productsRouter } from './routes/products';
import { router as categoriesRouter} from './routes/categories'


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/dist/myshop')));

app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);


app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/dist/myshop/index.html')));

export { app };
