import React from "react";

const achievementsContent = [
  { icon: "fa-magnet", subTitle1: "inbound", subTitle2: "focused" },
  { icon: "fa-info-circle", subTitle1: "detail", subTitle2: "oriented" },
  { icon: "fa-database", subTitle1: "data", subTitle2: "driven" },
  { icon: "fa-code", subTitle1: "tech", subTitle2: "driven" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative"><i className={`fa ${val.icon}`}></i></h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
