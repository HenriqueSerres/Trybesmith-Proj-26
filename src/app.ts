import express from 'express';
import blogRoutes from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/blogs', blogRoutes);

export default app;
