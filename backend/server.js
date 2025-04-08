import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/dbConnection.js";
import reservationRoute from "./routes/reservationRoute.js";

// Load .env file
dotenv.config();

const app = express();

// Enable CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));

// Body parser
app.use(express.json());

// Routes
app.use("/api/v1/reservation", reservationRoute);

// Port
const PORT = process.env.PORT || 5000;

// Connect DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
});
