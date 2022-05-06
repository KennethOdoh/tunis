import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/kenneth-odoh-0a6011199/",
  },
  {
    iconName: "fa fa-facebook",
    link: "https://facebook.com/kenneth.odoh.710",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/KennethOdoh10" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
