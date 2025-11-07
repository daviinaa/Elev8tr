import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaCamera } from "react-icons/fa";

export default function Dashboard() {
  const [profileImage, setProfileImage] = useState(null);
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    university: "",
    degree: "",
    graduationDate: "",
    gpa: "",
    bio: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const addInterest = () => {
    if (
      newInterest &&
      !interests.includes(newInterest) &&
      interests.length < 5
    ) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const removeInterest = (interest) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("✅ Changes saved successfully!");
    console.log({ formData, skills, interests });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-[#5F9EA0]">Your Dashboard</h1>

        <div className="flex gap-4">
          <Link
            to="/internshiplist"
            className="bg-[#5F9EA0] hover:bg-[#4f8587] text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            View Internships
          </Link>

          <Link
            to="/login"
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </Link>
        </div>
      </div>

      <p className="text-gray-300 mb-8">
        Welcome to your personalized dashboard. Here you can manage your
        profile, update your skills, and explore available internship
        opportunities.
      </p>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#5F9EA0]">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                  <FaCamera size={24} />
                </div>
              )}
            </div>
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-[#5F9EA0] p-2 rounded-full cursor-pointer hover:bg-[#4f8587] transition"
            >
              <FaCamera size={14} />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <h2 className="text-2xl font-bold">
              {formData.fullName || "Your Name"}
            </h2>
            <button
              type="button"
              className="flex items-center gap-2 text-sm text-[#5F9EA0] hover:text-[#4f8587] transition"
            >
              <FaEdit /> Edit
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSave} className="flex flex-col gap-6">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#5F9EA0] mb-3">
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
            </div>
          </div>

          {/* Academic Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#5F9EA0] mb-3">
              Academic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="university"
                placeholder="University / Institution"
                value={formData.university}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
              <input
                type="text"
                name="degree"
                placeholder="Degree / Major"
                value={formData.degree}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
              <input
                type="date"
                name="graduationDate"
                value={formData.graduationDate}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
              <input
                type="text"
                name="gpa"
                placeholder="GPA"
                value={formData.gpa}
                onChange={handleChange}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
              />
            </div>
          </div>

          {/* Skills & Interests */}
          <div>
            <h3 className="text-xl font-semibold text-[#5F9EA0] mb-3">
              Skills & Interests
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Skills */}
              <div>
                <label className="block mb-2 text-gray-300">
                  Technical Skills
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Add skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="flex-1 bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="bg-[#5F9EA0] hover:bg-[#4f8587] px-4 py-2 rounded-lg transition"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-[#5F9EA0]/20 border border-[#5F9EA0] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-red-400 hover:text-red-300"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block mb-2 text-gray-300">
                  Areas of Interest
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Add interest"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    className="flex-1 bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none"
                  />
                  <button
                    type="button"
                    onClick={addInterest}
                    className="bg-[#5F9EA0] hover:bg-[#4f8587] px-4 py-2 rounded-lg transition"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="bg-[#5F9EA0]/20 border border-[#5F9EA0] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {interest}
                      <button
                        type="button"
                        onClick={() => removeInterest(interest)}
                        className="text-red-400 hover:text-red-300"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
                {interests.length >= 5 && (
                  <p className="text-xs text-gray-400 mt-1">
                    Maximum of 5 interests allowed.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-[#5F9EA0] mb-3">
              Professional Bio
            </h3>
            <textarea
              name="bio"
              placeholder="Write a short professional bio..."
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              className="w-full bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5F9EA0] outline-none resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#5F9EA0] hover:bg-[#4f8587] text-white font-semibold px-8 py-2 rounded-lg transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
