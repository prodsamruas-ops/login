import 'dotenv/config';
import express from "express";
import userRoutes from './routers/userRouters.js';
import authRoutes from './routers/authRoutes.js';

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () =>{
    console.log("Servidor rodando na porta " + port);
});