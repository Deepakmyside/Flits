import type { Request, Response as ExpressResponse} from "express";
import { signupUser, loginUser } from "../services/auth.service";
import { AuthRequest } from "../middlewares/auth.middleware";
import { signupSchema, loginSchema } from "../validators/auth.validator";
import { AppError } from "../utils/app-error";


export async function signup(req: Request, res: ExpressResponse) {
    try{
        const {email, password} = signupSchema.parse(req.body);

        const user = await signupUser(email, password);

        res.status(201).json({
            success: true,
            message: "Account created successfully",
            user,
        });
    }catch (error) {
        handleError(error, res);
    
}
} 

export async function login(req: Request, res:  ExpressResponse) {
    try {
        const{ email, password} = loginSchema.parse(req.body);

        const result = await loginUser(email, password);
        res.status(200).json({
            success: true, 
            message: "Login successfull",
            ...result,
        });
    } catch(error) {
        handleError(error, res);
    }
}

export async function getMe(
    req: AuthRequest,
    res:ExpressResponse
){
    res.status(200).json({
        success: true,
        user: req.user
    })
}
function handleError(error: unknown, res: ExpressResponse) {
    if(error instanceof AppError) {
        res.status(error.statusCode).json({
        success: false,
        message: error.message,
        code: error.code
    });
    return;
}
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
}
