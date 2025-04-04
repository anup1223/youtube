
import dotenv from "dotenv";
import connectDB from './db/index.js';
import { app } from "./app.js";

dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3300, () => {
        console.log(`Server is running on port ${process.env.PORT || 3300}`);
    })
})
.catch((err) => {
    console.log('Error connecting to the MONGODB:', err);
    process.exit(1);
})
