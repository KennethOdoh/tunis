import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "INBOUND MARKETING ",
    institute: "Hubspot Academy",
    details: `Skilled in applying inbound marketing techniques in creating content, 
    converting and nurturing leads `,
  },
  {
    year: "2009",
    degree: "BACHELOR DEGREE ",
    institute: "TUNIS HIGH SCHOOL",
    details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        elit, sed do eiusmod tempor duntt`,
  },
  {
    year: "2022",
    degree: "ENGINEERING DEGREE",
    institute: "UNIVERSITY OF NIGERIA",
    details: `  B.Eng in Electronic Engineering,
    CGPA: 4.47 (2nd Class Upper)`,
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
