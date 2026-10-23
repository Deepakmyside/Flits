import type { NextFunction, Request, Response as ExpressResponse } from "express";
import jwt from "jsonwebtoken";
import {env} from "../config/env";
import { AppError } from "../utils/app-error";
import {prisma} from "../lib/prisma";

export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string
    };
}


export async function authenticate(
    req: AuthRequest,
    res: ExpressResponse,
    next: NextFunction
) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new AppError(
                "No token provided. Please login",
                401,
                "NO_TOKEN"
                          )
        };
     
    
     const token = authHeader.split(" ")[1];

     const decoded = jwt.verify(
        token,
        env.jwtSecret);
    
        if (
      typeof decoded === "string" ||
      typeof decoded.userId !== "string"
    ) {
      throw new AppError(
        "Invalid token payload",
        401,
        "INVALID_TOKEN"
      );
    }
    const user = await prisma.user.findUnique({
        where: {
            id: decoded.userId,
        },
        select: {
            id: true,
            email: true
        },
    });

    if(!user) {
        throw new AppError(
            "User no longer exists",
            401,
            "USER_NOT_FOUND"
        );
    }

    req.user = user;
     next();  //sends requests to protected route
} catch (error) {
    if( error instanceof AppError){
        res.status(error.statusCode).json({
            success: true,
            message: error.message,
            code: error.code
        });
        return;
    }

    res.status(401).json({
        success: false,
        message:"Invalid or expired token",
        code: "INVALID_TOKEN"
    })
}
}