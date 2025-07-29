import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = () => {
  const cohorts = [
    { id: 1, name: "Java Full Stack", status: "ongoing", trainer: "John", duration: "8 weeks" },
    { id: 2, name: "Python Data Science", status: "completed", trainer: "Alice", duration: "6 weeks" },
    { id: 3, name: "React Bootcamp", status: "ongoing", trainer: "Bob", duration: "4 weeks" }
  ];

  return (
    <div>
      <h2>Cohort Dashboard</h2>
      {cohorts.map(cohort => (
        <div key={cohort.id} className={styles.box}>
          <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
            {cohort.name} ({cohort.status})
          </h3>
          <dl>
            <dt>Trainer:</dt>
            <dd>{cohort.trainer}</dd>
            <dt>Duration:</dt>
            <dd>{cohort.duration}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default CohortDetails;
