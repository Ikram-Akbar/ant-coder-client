import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Create Profile",
      desc: "Sign up and showcase your skills and projects.",
    },
    {
      step: "2",
      title: "Browse Jobs",
      desc: "Find opportunities that match your expertise.",
    },
    {
      step: "3",
      title: "Get Hired",
      desc: "Apply, interview, and land your dream job.",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How Ant Coder Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="card bg-base-100 shadow-md p-6">
              <div className="text-4xl font-bold text-primary mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
