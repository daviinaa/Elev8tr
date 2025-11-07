import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, Briefcase, TrendingUp, CheckCircle } from "lucide-react";

export default function AdminDashboard() {
  const theme = "#5F9EA0";

  const summary = [
    { title: "Total Applicants", value: 1342, icon: <Users size={22} /> },
    { title: "Active Internships", value: 42, icon: <Briefcase size={22} /> },
    {
      title: "Scheduled Interviews",
      value: 178,
      icon: <CheckCircle size={22} />,
    },
    { title: "Monthly Growth", value: "12.4%", icon: <TrendingUp size={22} /> },
  ];

  const monthlyApps = [
    { month: "Jan", count: 120 },
    { month: "Feb", count: 160 },
    { month: "Mar", count: 190 },
    { month: "Apr", count: 220 },
    { month: "May", count: 260 },
    { month: "Jun", count: 310 },
  ];

  const categories = [
    { name: "Tech", applicants: 620 },
    { name: "Marketing", applicants: 310 },
    { name: "Design", applicants: 180 },
    { name: "Data Science", applicants: 230 },
  ];

  const locations = [
    { name: "London", value: 40 },
    { name: "Manchester", value: 25 },
    { name: "Preston", value: 20 },
    { name: "Blackburn", value: 15 },
  ];

  const pieColors = ["#5F9EA0", "#4f8587", "#3b6e70", "#2e5555"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-8">
      {/* <Header /> */}
      <h1 className="text-3xl font-bold mb-8 mt-10 text-[#5F9EA0]">
        Administrator Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {summary.map((card, i) => (
          <div
            key={i}
            className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-[#5F9EA0]/40 transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{card.title}</span>
              <span style={{ color: theme }}>{card.icon}</span>
            </div>
            <p className="text-3xl font-bold mt-3" style={{ color: theme }}>
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Applications Over Time</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={monthlyApps}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  background: "#1f2937",
                  border: "1px solid #5F9EA0",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke={theme}
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={categories}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  background: "#1f2937",
                  border: "1px solid #5F9EA0",
                }}
              />
              <Bar dataKey="applicants" fill={theme} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Location Distribution</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={locations}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={theme}
                dataKey="value"
                label
              >
                {locations.map((_, i) => (
                  <Cell key={i} fill={pieColors[i]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#1f2937",
                  border: "1px solid #5F9EA0",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
