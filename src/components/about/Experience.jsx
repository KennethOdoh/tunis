import React from "react";

const experienceContent = [
  {
    year: "Feb 2022 - May 2022",
    position: "Digital strategist",
    compnayName: "Extra Income Tips",
    details: `Sales funnel design and implementation, landing page development and backend integration with CRMs and email marketing systems, Google tag manager and Google analytics. 
    Also, managing lead generation campaigns across social media channels.`,
  },
  {
    year: "Jan 2022 - Mar 2022",
    position: "Digital Strategist and Social media manager",
    compnayName: "Immigration Hub",
    details: `Designing and developing inbound strategies, setting up sales funnel and also, managing lead generation campaign across social media channels.`,
  },
  {
    year: "Oct 2021 - Oct 2021",
    position: " Social media manager",
    compnayName: "Starkids",
    details: `Planning and executing lead generation campaigns across social media channels, performing audience research and engaging leads to boost conversion.`,
  },
  {
    year: "   Aug 2020 - Oct 2021",
    position: " Digital marketer",
    compnayName: "Chaze Digital",
    details: `  Developing landing pages and creating SEO-optimised web copies, tracking and analyzing marketing data, and also managing website backend.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
