import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (

        <section id="about">
        <div className="row">
          <div className="twelve columns main-col">
          <h2>About Me.</h2>
          <img className="profile-pic" src="images/profilepic.jpg" alt="shaun dawson profile pic" />
            <p> <b>Full Stack Developer | Video Producer </b><br></br> I'm an object-oriented programmer with a background in digital media production, ad technology and account management.
            </p>
              <div className="twelve columns main-col">
                <p>
                  <a href="https://drive.google.com/open?id=1BIL4p_7mUd78tSOTIo0C9o60wDeElDAW" target="_blank" rel="noopener noreferrer" className="button"> <i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
      </section> 
    );
  }
};