import "reflect-metadata";
import express from "express";
import cors from 'cors';
import { routes } from "./routes";

import { initializeDataSource } from './database/ormconfig';

initializeDataSource();
const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(3001, () => console.log("Server is running!"));