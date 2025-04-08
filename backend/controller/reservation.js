import Reservation from "../models/reservation.js";

export const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests } = req.body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newReservation = new Reservation({ name, email, phone, date, time, guests });
    await newReservation.save();

    res.status(201).json({ message: "Reservation saved successfully" });
  } catch (error) {
    console.error("❌ Error saving reservation:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};