import React, { useState } from "react";
import axios from "axios";

const Reservation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/reservation/send", form);
      alert("Reservation submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
      });
    } catch (error) {
      console.error("Reservation failed:", error);
      alert("Reservation failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "8px",
          background: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Make a Reservation</h2>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <input type="number" name="guests" value={form.guests} onChange={handleChange} min="1" required />
        <button type="submit" style={{ padding: "0.5rem", background: "#333", color: "#fff", border: "none", borderRadius: "4px" }}>
          Reserve
        </button>
      </form>
    </div>
  );
};

export default Reservation;
