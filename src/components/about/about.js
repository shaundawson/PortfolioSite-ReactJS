import React, { Component } from 'react';

export default class About extends Component {
    render() {
      return (

        <section id="about">
        <div className="row">
          <div className="two columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt />
          </div>
          <div className="ten columns main-col">
            <h2>Let me introduce myself.</h2>
            <p>Lorem Ipsum
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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