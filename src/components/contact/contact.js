import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (
        <section id="contact">
        <div className="row">
          <div className="ten columns">
            {/* form */}
            <form action method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactName" name="contactName" defaultValue={""} />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" defaultValue={""} />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" defaultValue={""} />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
        </div>
      </section> 
    );
  }
};