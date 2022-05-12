import React from "react";

const personalInfoContent = [
  { meta: "first paragraph", metaInfo: "Hi, I am Kenneth, a digital marketing engineer. I have experience working with brands to plan and execute successful digital marketing campaigns. I also utilize my technology skills in setting up robust marketing technology stacks for businesses, which help optimize workflows and automate processes." },
  { meta: "second paragraph", metaInfo: "I started my career in digital marketing because, in it, I find a perfect balance between technology and entrepreneurship.Young and ambitious, I am always eager to work with progressive organizations and businesses to unlock more heightened milestones built on scalable foundations" },
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
