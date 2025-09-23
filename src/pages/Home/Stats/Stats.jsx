import React from "react";
import { FaBriefcase, FaBuilding, FaUsers, FaGlobe } from "react-icons/fa";

const Stats = () => {
  const items = [
    {
      title: "Jobs Posted",
      value: "12.5K+",
      icon: <FaBriefcase className="w-6 h-6 text-primary" />,
      desc: "New opportunities every week",
    },
    {
      title: "Companies",
      value: "800+",
      icon: <FaBuilding className="w-6 h-6 text-secondary" />,
      desc: "Top hiring partners worldwide",
    },
    {
      title: "Developers",
      value: "50K+",
      icon: <FaUsers className="w-6 h-6 text-accent" />,
      desc: "Active job seekers community",
    },
    {
      title: "Countries",
      value: "30+",
      icon: <FaGlobe className="w-6 h-6 text-info" />,
      desc: "Global hiring reach",
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          {items.map((item, i) => (
            <div key={i} className="stat flex flex-col items-center">
              <div className="stat-figure">{item.icon}</div>
              <div className="stat-title">{item.title}</div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
