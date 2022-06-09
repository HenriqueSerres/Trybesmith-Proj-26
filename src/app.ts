import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productRoutes from './routes/productRouter';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use(errorMiddleware);

export default app;
