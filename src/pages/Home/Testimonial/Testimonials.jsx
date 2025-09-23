import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahim Uddin",
      role: "Frontend Developer",
      msg: "Ant Coder helped me land my first job in just 2 weeks! 🚀",
    },
    {
      name: "Sumaiya Akter",
      role: "Data Scientist",
      msg: "The platform is so easy to use and filled with real opportunities.",
    },
    {
      name: "Karim Hossain",
      role: "Fullstack Engineer",
      msg: "I grew my network and found freelance gigs quickly!",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Job Seekers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="card bg-base-200 shadow-md p-6 rounded-xl">
              <p className="italic mb-4">“{r.msg}”</p>
              <h4 className="font-semibold">{r.name}</h4>
              <span className="text-sm text-gray-500">{r.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
