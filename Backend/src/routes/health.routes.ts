import {Router} from "express";
import { prisma } from "../lib/prisma";

const  router = Router();

router.get("/", async (_req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.json({
            success: true,
            message: "Flit API is running",
            database: "connected"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: " Database connection failed"
        });
    }
});
export default router;
