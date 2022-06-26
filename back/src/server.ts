import "reflect-metadata";
import express from "express";
import cors from 'cors';
import { routes } from "./routes";

import { initializeDataSource } from './database/ormconfig';

initializeDataSource();
const app = express();

const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(port, () => console.log(`Server is running! Porta: ${port}`));
