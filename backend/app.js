
    import express from "express";
    import dotenv from "dotenv";
    import cors from "cors";
    import { errorMiddleware } from "./middlewares/error.js";
    import reservationRouter from "./routes/reservationRoute.js";
    import { dbConnection } from "./database/dbConnection.js";
    
    const app = express();
    dotenv.config({ path: "./config.env" });
    
    app.use(cors({ origin: [process.env.FRONTEND_URL], credentials: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    // This is key!
    app.use("/api/v1/reservation", reservationRouter);
    
    dbConnection();
    
    app.use(errorMiddleware);
    
    export default app;
    