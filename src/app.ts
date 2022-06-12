import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productRoutes from './routes/productRouter';
import userRoutes from './routes/userRouter';
import orderRoutes from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

app.use(errorMiddleware);

export default app;
