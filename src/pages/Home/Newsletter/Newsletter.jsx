import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">
          Get weekly job alerts, career tips, and latest opportunities.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs rounded-r-none"
          />
          <button className="btn btn-secondary rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
