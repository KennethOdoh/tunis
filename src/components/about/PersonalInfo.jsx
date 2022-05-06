import React from "react";

const personalInfoContent = [
  { meta: "first paragraph", metaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet turpis ac justo sodales imperdiet posuere nec tellus. Donec ac sem sed justo aliquet congue consequat quis odio. Nulla id molestie dui, eu convallis augue. Vivamus odio nisi, tincidunt vel euismod id, auctor a ante. Sed placerat mauris nibh, vel dapibus lectus laoreet in." },
  { meta: "second paragraph", metaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet turpis ac justo sodales imperdiet posuere nec tellus. Donec ac sem sed justo aliquet congue consequat quis odio. Nulla id molestie dui, eu convallis augue. Vivamus odio nisi, tincidunt vel euismod id, auctor a ante. Sed placerat mauris nibh, vel dapibus lectus laoreet in." },
  { meta: "third paragraph", metaInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet turpis ac justo sodales imperdiet posuere nec tellus. Donec ac sem sed justo aliquet congue consequat quis odio. Nulla id molestie dui, eu convallis augue. Vivamus odio nisi, tincidunt vel euismod id, auctor a ante. Sed placerat mauris nibh, vel dapibus lectus laoreet in." },
];

const PersonalInfo = () => {
  return (
    <ul className="list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
            {val.metaInfo} <br/>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
