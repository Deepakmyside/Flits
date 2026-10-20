import dotenv from "dotenv";
dotenv.config();
import app from "./app"

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(`Flit API is running on port ${PORT}`); 
}); 