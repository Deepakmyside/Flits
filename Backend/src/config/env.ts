import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

if(!jwtSecret || jwtSecret.length < 32) {
    throw new Error("JWT_SECRET must be at least 32 characters")
}

export const env = {
    port:   Number(process.env.PORT) || 5000,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret
  
};
