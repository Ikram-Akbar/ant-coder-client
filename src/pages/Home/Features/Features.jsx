import React from "react";
import { Briefcase, Users, Trophy } from "lucide-react";

const Features = () => {
  const items = [
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      title: "Find Jobs",
      desc: "Browse thousands of opportunities tailored for developers.",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Networking",
      desc: "Connect with peers, recruiters, and mentors.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-primary" />,
      title: "Skill Growth",
      desc: "Access resources to sharpen your coding abilities.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Ant Coder?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="card bg-base-200 shadow-md hover:shadow-lg transition rounded-xl p-6"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
