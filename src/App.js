import React, { useState, useEffect } from "react";
import Loader from "./loader/Loader";

import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <Loader></Loader>
      </section>
    );
  }

  const { title, dates, duties, company } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h1>expierence</h1>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* button container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
