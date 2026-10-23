import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { AppError } from "../utils/app-error";
import { Prisma } from "@prisma/client";
import {prisma} from "../lib/prisma"
import { env} from "../config/env";


export async function signupUser(email: string, password: string) {
    const normalizedEmail =email.trim().toLowerCase();
    const existingUser = await prisma.user.findUnique({
        where: { email: normalizedEmail},
    });
    
    if (existingUser) {
         throw new AppError("Email is already registered",
            409,
            "EMAIL_ALREADY_EXISTS"
         );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    
    try {
        const user = await prisma.user.create({
            data: {
                email: normalizedEmail,
                passwordHash
            },
            select: {
                id: true,
                email: true,
                createdAt: true,
            },
        });
        return user;
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002"
        ) {
            throw new AppError(
                "This email is already registered",
                409,
                "EMAIL_ALREADY_EXISTS"
            );
        }
        throw error;
    }
};


export async function loginUser(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
        where: {
            email: normalizedEmail,
        },
    });

    if(!user) {
        throw new AppError(
    "Invalid email or password",
    401,
    "INVALID_CREDENTIALS"
        );
    }
    const isPasswordValid = await bcrypt.compare(
        password,
        user.passwordHash
    );

    if(!isPasswordValid) {
        throw new AppError(
            "Invalid email or password",
            401,
            "INVALID_CREDENTIALS"
        )
    }

    const token = jwt.sign(
        {
             userId: user.id,     
        },
        env.jwtSecret as string,
        {
            expiresIn: "7d",
        }
    );
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            createdAt: user.createdAt
        }
    }
}