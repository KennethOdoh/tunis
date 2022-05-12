import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const index = () => {
  return (
    <section className="main-content ">

        {/* Personal Info Starts */}

        <div className="col-lg-12 col-12 text-center">
          
          {/* image for mobile menu */}
          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600 mt-8">
                personal infos
              </h3>
            </div>
            {/* End .col */}

            <div className="col-12 d-block mb-3">
              <img 
                src="img/hero/img-mobile.jpg"
                className="img-fluid rounded-circle"
                alt="Kenneth Odoh"
              />
            </div>
            {/* image for mobile menu */}
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <PersonalInfo />
              </div>
              <div className="col-lg-3"></div>
              {/* End personal info */}
            </div>
            <div className="col-12 mt-1">
              <a className="button" href="img/cv.webp" download>
                <span className="button-text">View Resume</span>
                <span className="button-icon fa fa-download"></span>
              </a>
            </div>
            {/* End download button */}
          </div>
        </div>
        {/*  Personal Info Ends */}


        <hr className="separator mt-0" />
        <div className="col-lg-6 mx-lg-4 mb-0 title-section justify-center">
        <Tabs className="list-unstyled ">
          <TabList className="">
            <pre>
              <Tab className="button p-2 m-2 text-center">METHODOLOGY</Tab>
              <Tab className="button p-2 m-2 text-center">EDUCATION</Tab>
              <Tab className="button p-2 m-2 text-center">EXPERIENCE</Tab>
            </pre>           
          </TabList>
          <div className="row tab-panel d-block">
            <TabPanel>
              <div> 
                <div className="col-lg-6 resume-box">
                  <Achievements />
                </div>
              </div>
            </TabPanel></div>
          <div className="row tab-panel d-block">
            <TabPanel>
              <div>
                <div className="col-lg-6 resume-box">
                  <Education />
                </div>
              </div>
            </TabPanel></div>
          <div className="row tab-panel d-block">
            <TabPanel>
              <div>
                <div className="col-lg-6 resume-box">
                  <Experience />
                </div>
              </div>
            </TabPanel></div>
        </Tabs></div>
    </section>
  );
};

export default index;
