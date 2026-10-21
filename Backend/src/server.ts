import express from "express";
import cors from "cors";
import helmet from "helmet";
import healthRoutes from "./routes/health.routes";
import {env} from "./config/env";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);

app.listen(env.port, ()=> {
    console.log(`Flit backend running on port ${env.port}`);
     
});