import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        
          {/* Personal Info Starts */}

          <div className="col-lg-12 col-12 text-center">
          <div className="img_hidden_for_mobile d-block d-none d-sm-block">
                <img
                  src="img/hero/img-mobile.jpg"
                  className="img-fluid main-img-mobile"
                  alt="Kenneth Odoh"
                />
              </div>
              {/* image for mobile menu */}
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 mt-8">
                  personal infos
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src="img/hero/img-mobile.jpg"
                  className="img-fluid main-img-mobile"
                  alt="Kenneth Odoh"
                />
              </div>
              {/* image for mobile menu */}
              <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <PersonalInfo />
              </div>
              <div className="col-lg-2"></div>
              {/* End personal info */} 
              </div>
              <div className="col-12 mt-1">
                <a className="button" href="img/cv.webp" download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

        <hr className="separator" />

        <hr className="separator mt-1" />

        <Tabs>
          <TabList className="col-lg-8 list-unstyled about-tab-list text-center d-block">
          <Tab className="tab-btn" style={{float: 'left', 'margin': '20px', padding: '5px 15px', border: 'solid #FFB400 0.5px', 'border-radius': '10px',}}>METHODOLOGY <br></br></Tab>
          <Tab className="tab-btn" style={{float: 'left', 'margin': '20px', padding: '5px 15px', border: 'solid #FFB400 0.5px', 'border-radius': '10px',}}>EDUCATION <br></br></Tab>
          <Tab className="tab-btn" style={{float: 'left', 'margin': '20px', padding: '5px 15px', border: 'solid #FFB400 0.5px', 'border-radius': '10px',}}>EXPERIENCE <br></br></Tab>
          </TabList>
          <div className="row tab-panel d-block">
          <TabPanel>
            <div><br></br>
            <div className="col-lg-8 resume-box">
              <Achievements />
            </div>
          </div>
          </TabPanel></div>
          <div className="row tab-panel d-block">
          <TabPanel>
          <div>
            <div className="col-lg-8 resume-box">
              <Education />
            </div>
          </div>
          </TabPanel></div>
          <div className="row tab-panel d-block">
          <TabPanel>
          <div>
            <div className="col-lg-8 resume-box">
              <Experience />
            </div>
          </div>
          </TabPanel></div>
        </Tabs>
      </div>
    </section>
  );
};

export default index;
