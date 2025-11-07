import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function InternshipScheduling() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const color = "#5F9EA0";

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
  ];

  const bookSlot = () => {
    if (!date || !time) return;
    setConfirm(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-6 py-12 text-white">
      <Header />
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
        <h1
          className="text-2xl font-bold mb-4 flex items-center gap-2"
          style={{ color }}
        >
          <CalendarDays /> Book Interview Slot
        </h1>

        <label className="text-sm text-gray-300 mb-1 block">Choose Date</label>
        <input
          type="date"
          className="w-full bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 mb-4 focus:ring-2 outline-none"
          style={{ focusRingColor: color }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label className="text-sm text-gray-300 mb-1 block">
          Available Slots
        </label>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setTime(slot)}
              className={`px-3 py-2 rounded-lg text-sm border transition 
                ${
                  time === slot
                    ? "bg-[#5F9EA0] text-white border-[#5F9EA0]"
                    : "bg-gray-800/60 border-gray-700"
                }
              `}
            >
              <Clock size={14} className="inline-block mr-1" /> {slot}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={reminder}
            onChange={() => setReminder(!reminder)}
            className="w-4 h-4 accent-[#5F9EA0]"
          />
          <span className="text-sm text-gray-300">Send me a reminder</span>
        </div>

        <button
          onClick={bookSlot}
          className="w-full py-2 rounded-lg font-semibold text-white transition"
          style={{ backgroundColor: color }}
        >
          Book Slot
        </button>

        <AnimatePresence>
          {confirm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-4 rounded-lg border border-[#5F9EA0] bg-[#5F9EA0]/20 text-center"
            >
              <CheckCircle2
                size={30}
                className="mx-auto mb-2"
                style={{ color }}
              />
              <p className="font-semibold text-white">Interview Booked!</p>
              <p className="text-sm text-gray-200 mt-1">
                {date} at {time} {reminder ? "(Reminder On)" : ""}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
