import React from "react";

const educationContent = [
    {
    year: "2022",
    degree: "ENGINEERING DEGREE",
    institute: "UNIVERSITY OF NIGERIA",
    details: `  B.Eng in Electronic Engineering (2nd Class Upper)`,
  },
  {
    year: "2022 - present",
    degree: "Data analysis nanodegree",
    institute: "Udacity",
    details: `Uncovering insights, communicating critical findings and creating data-driven business solutions using Python, SQL and statistics. `,
  },
  {
    year: "2022",
    degree: "Advanced Facebook advertising",
    institute: "Linkedin Learning",
    details: `Advanced level Facebook advertising strategies to optimise campaigns, reach and expand audience across Facebook and Instagram`,
  },
  {
    year: "2022",
    degree: "Mass conversion",
    institute: "Frank Kern",
    details: `Step by step blueprint to positioning a brand, creating an offer, developing sales strategies and generating targeted leads through advertising. `,
  },
  {
    year: "2022",
    degree: "INBOUND MARKETING",
    institute: "Hubspot Academy",
    details: `Skilled in applying inbound marketing techniques in creating content 
    and nurturing leads all through the buyer's journey `,
  },
  {
    year: "2022",
    degree: "Ultimate SEO Training",
    institute: "Udemy",
    details: `Foundational training on search engine optimisation, from keyword research, onpage SEO, link building to technical SEO, to improve the visibility of a website on search engines`,
  },
  {
    year: "2020",
    degree: "Google Analytics Essential Training",
    institute: "Linkedin Learning",
    details: "Tracking, analysing and reporting site data, setting marketing goals and  understanding customer behaviours"
  },
  {
    year: "2020",
    degree: "SEO Foundations",
    institute: "Linkedin Learning",
    details:"Leveraging the fundamentals of search engine optimisation to boost website's visibility on search engines"
  },
  {
      year: "2020",
      degree: "Online Marketing Foundations",
      institute: "Linkedin Learning",
      details: "Building a successful online marketing campaign for all digital channels: search, video, social, email and display"
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
