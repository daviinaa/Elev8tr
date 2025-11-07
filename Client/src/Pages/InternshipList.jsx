import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, MapPin, CalendarDays, Clock } from "lucide-react";

export default function InternshipList() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("latest");
  const [location, setLocation] = useState("All");
  const navigate = useNavigate();

  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechNova Solutions",
      category: "Technology",
      location: "London",
      requirements: ["React", "Tailwind CSS", "Git"],
      deadline: "2025-11-10",
      description:
        "Assist in building responsive web interfaces and improving user experience.",
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "BrandSpark Agency",
      category: "Marketing",
      location: "Preston",
      requirements: ["SEO", "Google Analytics", "Content Strategy"],
      deadline: "2025-10-25",
      description:
        "Work with our marketing team to develop social media campaigns and SEO strategies.",
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "Insight Analytics",
      category: "Data Science",
      location: "Manchester",
      requirements: ["Python", "Excel", "PowerBI"],
      deadline: "2025-12-01",
      description:
        "Support data collection and visualization tasks to drive business insights.",
    },
    {
      id: 4,
      title: "UX/UI Design Intern",
      company: "Creative Minds",
      category: "Design",
      location: "Blackburn",
      requirements: ["Figma", "Adobe XD", "Creativity"],
      deadline: "2025-11-05",
      description:
        "Collaborate with the design team to craft engaging and intuitive user interfaces.",
    },
  ];

  const filteredInternships = internships
    .filter(
      (job) =>
        (filter === "All" || job.category === filter) &&
        (location === "All" || job.location === location)
    )
    .sort((a, b) => {
      if (sort === "latest") return new Date(b.deadline) - new Date(a.deadline);
      if (sort === "earliest")
        return new Date(a.deadline) - new Date(b.deadline);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#5F9EA0]">
          Internship Opportunities
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-4">
            <select
              className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-md focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="All">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Data Science">Data Science</option>
            </select>

            <select
              className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-md focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            >
              <option value="All">All Locations</option>
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Preston">Preston</option>
              <option value="Blackburn">Blackburn</option>
            </select>
          </div>

          <select
            className="bg-gray-800 border border-gray-700 px-3 py-2 rounded-md focus:ring-2 focus:ring-[#5F9EA0] outline-none"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          >
            <option value="latest">Sort by Latest Deadline</option>
            <option value="earliest">Sort by Earliest Deadline</option>
          </select>
        </div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-[#5F9EA0]/40 transition-shadow duration-300 p-6 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#5F9EA0]">
                  {internship.title}
                </h2>
                <Briefcase className="text-[#5F9EA0]" />
              </div>

              <p className="text-gray-400 text-sm mb-2">{internship.company}</p>
              <p className="text-gray-300 text-sm mb-4">
                {internship.description}
              </p>

              <div className="text-sm space-y-1 text-gray-300">
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> {internship.location}
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays size={16} /> Deadline:{" "}
                  <span className="text-[#5F9EA0] font-medium">
                    {new Date(internship.deadline).toLocaleDateString()}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} /> Category: {internship.category}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-200 mb-1">
                  Requirements:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {internship.requirements.map((req, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#5F9EA0]/20 border border-[#5F9EA0] rounded-full px-3 py-1"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigate(`/internships/${internship.id}`)}
                className="mt-6 w-full bg-[#5F9EA0] hover:bg-[#4f8587] text-white font-semibold py-2 rounded-lg transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No internships match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
