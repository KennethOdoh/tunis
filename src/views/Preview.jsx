import React from "react";
import { Link } from "react-router-dom";

const previewDemo = [
  {
    img: "immigration-hub",
    title: "Immigration Hub",
    description: "Setting up an inbound marketing strategy for a travels & immigration brand",
    routerPath: "https://casestudies.kennethodoh.digital/",
    tags: "Facebook Ad,",
    delayAnimation: "50",
  },
  {
    img: "data-analysis-kenneth-odoh",
    title: "Data Analysis with Python",
    description: "Drawing insights from audience behaviour through data analysis",
    routerPath: "https://casestudies.kennethodoh.digital/da/hospital-appointment.html",
    tags: "Data Analysis",
    delayAnimation: "50",
  },
  {
    img: "amzn-kdp",
    title: "Amazon KDP",
    description: "A sales page design and copywriting project",
    routerPath: "https://johnblessing1501.systeme.io/amazon-kdp",
    tags: "Landing page",
    delayAnimation: "50",
  },
  {
    img: "frank-kern",
    title: "Frank Kern",
    description: "A redesign of Frank Kern's portfolio website.",
    routerPath: "https://kennethodoh30.systeme.io/frank/",
    tags: "Landing page",
    delayAnimation: "50",
  },
];


const Preview = () => {
  return (
    <div>
      <section className="banner text-center">
        <div className="content">
          <h1>Case studies</h1>
          <h2>A review of some of my projects</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <a href={`${val.routerPath}`} target="_blank" rel="noreferrer">
                      <img
                        src={`img/intro/${val.img}.jpg`}
                        alt="demo"
                        className="img-responsive screenshot"
                      />
                    </a>
                  </div>
                  <h2>{val.title}</h2>
                  <p>{`${val.description}`}</p>
                  <div className="anchor">
                    <h6>
                    <a className="btn" href={`${val.routerPath}`} target="_blank" rel="noreferrer">
                        view project
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      <footer>
        <div className="go_purchase">
          <h6 data-aos="fade-up" data-aos-duration="1200">
            Liked what you saw?
          </h6>
          <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          I am always open to discussing new projects{" "}
            <span className="theme-color">and</span> opportunities to be part of your visions.
          </h3>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <a
              className="button"
              href="mailto:kennethodoh30@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> contact me</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
          </div>
        </div>
        {/* End go_purchase */}
        <div className="text-center footer_copyright">
          <h5>
            &copy; {new Date().getFullYear()} {" "}
              Kenneth Odoh
          </h5>
        </div>
      </footer>
      {/* End footer */}
    </div>
  );
};

export default Preview;
