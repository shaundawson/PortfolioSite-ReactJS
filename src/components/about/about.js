import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (

        <section id="about">
        <div className="row">
          <div className="twelve columns main-col">
          <h2>About Me.</h2>
          <img className="profile-pic" src="images/profilepic.jpg" alt="shaun dawson profile pic" />
            <p> <b>Full Stack Developer | Documentary Filmmaker </b><br></br> I'm a design oriented programmer with a rich blend of experience in new media. I'm passionate about telling stories that amplify the voices of the "other".  
            </p>
              <div className="twelve columns main-col">
                <p>
                  <a href="https://drive.google.com/file/d/1zFBMKnH41kcElnUL1CG5LrqTNCFeoiHS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="button"> <i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
      </section> 
    );
  }
};