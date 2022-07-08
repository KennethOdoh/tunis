import React from "react";

const personalInfoContent = [
  { meta: "first paragraph", metaInfo: "I'm Kenneth Odoh, a data-driven digital marketer. My perspective to digital marketing is simple - to help businesses meet business ambitious goals by matching technology with entrepreneurship."},
  {meta: "second paragraph", metaInfo: "I have worked with brands to plan and execute digital marketing campaigns, set up sales funnels,  optimize processes and automate workflows."},
  {meta: "third paragraph", metaInfo: "I am always eager to work with progressive organizations and businesses to unlock more heightened milestones built on scalable foundations." },
];

const PersonalInfo = () => {
  return (
    <ul className="list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
            <p>{val.metaInfo} </p>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
