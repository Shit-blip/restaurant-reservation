import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  date: String,
  time: String,
  guests: Number,
}, { timestamps: true });

export default mongoose.model("Reservation", reservationSchema);
