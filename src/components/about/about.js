import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (

        <section id="about">
        <div className="row">
          <div className="twelve columns main-col">
          <h2>about.</h2>
          <img className="profile-pic" src="images/profilepic.jpg" alt />
            <p> <b>Full Stack Developer | Documentary Filmmaker </b><br></br> I'm a design oriented programmer with a rich blend of experience in new media. I'm passionate about telling stories that amplify the voices of individuals who are perceived by the majority as being different in some fundamental way. 
            </p>
              <div className="twelve columns main-col">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
      </section> 
    );
  }
};