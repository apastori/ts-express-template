import express from "express";

import { Application } from "express";

import { Env } from "./env";

import { startServerLogEnv } from './startServer';

import { initialRoute } from './InitialRoute';

process.env = Env;

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 3000;

app.get('/', initialRoute);

app.listen(PORT, startServerLogEnv);