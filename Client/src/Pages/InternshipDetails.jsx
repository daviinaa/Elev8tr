import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function InternshipDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const internship = {
    title: "Frontend Developer Intern",
    company: "TechNova Labs",
    location: "Remote / London, United Kingdom",
    duration: "3 Months",
    deadline: "December 15, 2025",
    description:
      "Join our team to build innovative web applications using React and Tailwind. You'll collaborate with developers, designers, and project managers to deliver responsive, user-friendly interfaces.",
    requirements: [
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with React.js",
      "Basic understanding of Git and version control",
      "Excellent communication and teamwork skills",
    ],
    responsibilities: [
      "Develop and maintain frontend components",
      "Collaborate with backend developers and designers",
      "Ensure responsive and accessible UI design",
      "Contribute to daily standups and team discussions",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-10">
      {/* <Header /> */}
      <div className="max-w-5xl mx-auto bg-gray-800/60 p-8 rounded-2xl shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-[#5F9EA0]">
              {internship.title}
            </h1>
            <p className="text-gray-300">{internship.company}</p>
          </div>

          <button
            onClick={() => navigate(`/apply/${id}`)}
            className="mt-4 md:mt-0 px-6 py-2 bg-[#5F9EA0] hover:bg-[#4f8587] rounded-lg text-white font-semibold transition"
          >
            Apply Now
          </button>
        </div>

        {/* Details Section */}
        <div className="mt-6 flex flex-wrap gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#5F9EA0]" />{" "}
            <span>{internship.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-[#5F9EA0]" />{" "}
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-[#5F9EA0]" />{" "}
            <span>Deadline: {internship.deadline}</span>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-[#5F9EA0]">
            Description
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {internship.description}
          </p>

          {/* Requirements */}
          <h2 className="text-xl font-semibold mb-2 text-[#5F9EA0]">
            Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
            {internship.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>

          {/* Responsibilities */}
          <h2 className="text-xl font-semibold mb-2 text-[#5F9EA0]">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {internship.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
