// src/components/Resume.js
import React from 'react';

const Resume = ({ resumeData }) => {
  return (    <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 bg-white dark:bg-gray-800 dark:text-dark-text-color">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-primary-color dark:text-dark-text-color">Interactive Resume</h1>
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <a href={resumeData.pdfUrl} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="relative overflow-hidden border border-secondary-color bg-secondary-color text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-4 sm:px-6 py-2 inline-flex items-center dark:bg-dark-background-color dark:text-dark-text-color"
          >
            View PDF
          </button>
        </a>
      </div>
      <div className="timeline border-l-2 sm:border-l-4 border-primary-color dark:border-dark-text-color">
        {resumeData.timeline.map((item, index) => (
          <div key={index} className="timeline-item mb-6 sm:mb-8 ml-3 sm:ml-4">
            <div className="timeline-content bg-white dark:bg-dark-background-color shadow-lg p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary-color dark:text-dark-text-color mb-2">{item.title}</h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">{item.period}</p>
              <p className="text-sm sm:text-base text-gray-700 dark:text-dark-text-color">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
