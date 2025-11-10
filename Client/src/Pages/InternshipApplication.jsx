import React, { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

export default function InternshipApplication() {
  const { id } = useParams();
  const navigate = useNavigate();

  const internships = useMemo(
    () => ({
      1: { title: "Frontend Developer Intern", company: "TechNova Solutions" },
      2: { title: "Digital Marketing Intern", company: "BrandSpark Agency" },
      3: { title: "Data Analyst Intern", company: "Insight Analytics" },
      4: { title: "UX/UI Design Intern", company: "Creative Minds" },
    }),
    []
  );
  const picked = internships[id] || {
    title: "Internship Application",
    company: "—",
  };

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    portfolio: "",
    coverLetter: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("Draft");
  const [banner, setBanner] = useState(null);

  const color = "#5F9EA0";

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "A valid email is required.";
    if (!form.coverLetter.trim() || form.coverLetter.length < 80)
      e.coverLetter = "Cover letter should be at least 80 characters.";
    if (!form.resume) e.resume = "Please upload your resume (PDF or DOCX).";
    else if (!/\.(pdf|doc|docx)$/i.test(form.resume.name))
      e.resume = "Resume must be a PDF, DOC, or DOCX file.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm((f) => ({ ...f, resume: files?.[0] || null }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const submit = (e) => {
    e.preventDefault();
    setBanner(null);
    if (!validate()) {
      setBanner({
        type: "error",
        msg: "Please fix the highlighted fields and try again.",
      });
      return;
    }
    setSubmitting(true);
    setStatus("Submitted");

    setTimeout(() => {
      setSubmitting(false);
      setBanner({
        type: "success",
        msg: "Application submitted successfully!",
      });
      setStatus("Under Review");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <header className="w-full px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Elev8tr
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/internships" className="hover:opacity-80 transition">
            Internships
          </Link>
          <Link to="/dashboard" className="hover:opacity-80 transition">
            Dashboard
          </Link>
        </nav>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm px-3 py-1 rounded-lg border border-white/20 hover:bg-white/10 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </header>

      <main className="px-6 py-10">
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold">
                Apply: <span style={{ color }}>{picked.title}</span>
              </h1>
              <p className="text-gray-300 mt-1">{picked.company}</p>
            </div>
            <div className="flex items-center gap-3">
              {["Draft", "Submitted", "Under Review"].map((s, i) => {
                const active =
                  status === s ||
                  (status === "Under Review" && s !== "Draft") ||
                  (status === "Submitted" &&
                    (s === "Draft" || s === "Submitted"));
                return (
                  <div key={s} className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        active
                          ? "bg-[#5F9EA0]/20 border-[#5F9EA0] text-white"
                          : "bg-transparent border-gray-600 text-gray-300"
                      }`}
                    >
                      {s}
                    </span>
                    {i < 2 && <span className="w-6 h-[2px] bg-gray-600" />}
                  </div>
                );
              })}
            </div>
          </div>

          <AnimatePresence>
            {banner && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`mt-6 rounded-lg p-4 border ${
                  banner.type === "success"
                    ? "bg-emerald-500/15 border-emerald-500/40"
                    : "bg-red-500/15 border-red-500/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  {banner.type === "success" ? (
                    <CheckCircle2 className="shrink-0" />
                  ) : (
                    <AlertCircle className="shrink-0" />
                  )}
                  <p className="text-sm">{banner.msg}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={submit} className="mt-8 grid gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color }}>
                Personal Info
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-300">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${
                      errors.fullName ? "border-red-500" : "border-gray-700"
                    } text-white focus:outline-none focus:ring-2 focus:ring-[${color}] transition`}
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-300">
                    Email
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={`w-full px-4 py-2 rounded-lg bg-gray-800/60 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } text-white focus:outline-none focus:ring-2 focus:ring-[${color}] transition`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm mb-1 text-gray-300">
                    Portfolio (optional)
                  </label>
                  <input
                    name="portfolio"
                    value={form.portfolio}
                    onChange={onChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#5F9EA0] transition"
                    placeholder="your portfolio website URL"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color }}>
                Resume
              </h2>
              <label
                htmlFor="resume"
                className={`flex items-center justify-between gap-3 w-full px-4 py-3 rounded-lg bg-gray-800/60 border ${
                  errors.resume ? "border-red-500" : "border-gray-700"
                } text-gray-200 cursor-pointer hover:bg-gray-800 transition`}
              >
                <div className="flex items-center gap-3">
                  <Upload />
                  <div className="text-sm">
                    <p className="font-medium">
                      {form.resume ? form.resume.name : "Upload PDF/DOC/DOCX"}
                    </p>
                    <p className="text-gray-400">Max 5MB • PDF, DOC, DOCX</p>
                  </div>
                </div>
                <span
                  className="px-3 py-1 rounded-md text-sm"
                  style={{
                    backgroundColor: "rgba(95,158,160,0.2)",
                    border: `1px solid ${color}`,
                  }}
                >
                  Choose file
                </span>
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={onChange}
              />
              {errors.resume && (
                <p className="text-xs text-red-400 mt-1">{errors.resume}</p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color }}>
                Cover Letter
              </h2>
              <div className="relative">
                <textarea
                  name="coverLetter"
                  value={form.coverLetter}
                  onChange={onChange}
                  rows={6}
                  className={`w-full rounded-lg bg-gray-800/60 border ${
                    errors.coverLetter ? "border-red-500" : "border-gray-700"
                  } text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[${color}] transition resize-y`}
                  placeholder="Tell us why you're a great fit..."
                />
                <FileText className="absolute right-3 top-3 opacity-50" />
              </div>
              {errors.coverLetter && (
                <p className="text-xs text-red-400 mt-1">
                  {errors.coverLetter}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-400">
                By submitting, you agree to our{" "}
                <Link to="/terms" className="underline" style={{ color }}>
                  terms & conditions
                </Link>
                .
              </p>

              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
                type="submit"
                disabled={submitting}
                className="px-6 py-2 rounded-lg font-semibold text-white transition disabled:opacity-60"
                style={{ backgroundColor: color }}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </motion.button>
            </div>

            {status === "Under Review" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex gap-3 items-center text-sm"
              >
                <CheckCircle2 style={{ color }} />
                <span className="text-gray-200">
                  Your application is now{" "}
                  <span className="font-semibold">Under Review</span>. We’ll
                  email you with updates.
                </span>
              </motion.div>
            )}

            <div className="flex gap-3 pt-2 flex-wrap">
              <button
                type="button"
                onClick={() => navigate(`/internships/${id}`)}
                className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-white/10 transition"
              >
                Back to Details
              </button>

              <button
                type="button"
                onClick={() => navigate("/internships")}
                className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-white/10 transition"
              >
                Browse More
              </button>

              <button
                type="button"
                onClick={() => navigate("/internshipscheduling")}
                className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-white/10 transition text-[#5F9EA0] font-semibold"
              >
                Schedule Interview
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
