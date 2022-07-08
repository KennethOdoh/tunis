import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1tmgqj6', 'template_55s9go6', form.current, 'IZMh6f7gLrRigtNC2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="from_name" placeholder="YOUR NAME" required="true" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="from_email" placeholder="YOUR EMAIL" required="true" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
            <input type="text" name="subject" placeholder="SUBJECT" required="true" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
            <textarea name="message"  placeholder="YOUR MESSAGE" required="true" />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" value="Send" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
