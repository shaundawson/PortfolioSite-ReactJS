import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
      return (

        <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Portfolio</h1>
            <h6>bytes of code.</h6>
            <br></br>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt src="images/portfolio/blackfriendsdinner.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>blackfriendsdinner.com</h5>
                        <p> Production, Web Design & Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
             
        
        {/* Video Portfolio
        --------------------------------------------------------------- */}
              <hr></hr>
              <h6> pixels.</h6>
              <br></br>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt src="images/portfolio/nandikayyy.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>NandiKayyy </h5>
                        <p>Video Production</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt src="images/portfolio/assignedsex.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Assigned Sex</h5>
                        <p>Video Production</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}

          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-blackfriendsdinner.jpg" alt />
            <div className="description-box">
              <h4>Black Friends Dinner Website</h4>
              <p>Black Friends Dinner is a table side conversation where guests navigate what it means to value Black lives in a world that doesn't. </p>
              <span className="categories"><i className="fa fa-tag" />Audio Production, Web Design, Web Developement</span>
            </div>
            <div className="link-box">
              <a href="http://www.blackfriendsdinner.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}

        
          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-nandikayyy.png" alt />
            <div className="description-box">
              <h4>NandiKayyy: Songs of Revolution Project | Mini Doc (5:50)</h4>
              <p>Singer/songwriter Nandi Kayyy talks on inspiration and responsibility to reflect the times as a queer artist of color.</p>
              <span className="categories"><i className="fa fa-tag" />Video Production</span>
            </div>
            <div className="link-box">
              <a href="https://vimeo.com/271667258" target="_blank" rel="noopener noreferrer">Watch</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}
          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
            <div className="description-box">
              <h4>Assigned Sex Documentary Project</h4>
              <p>Five transgender people of color chronicle their transition journey, struggles and triumphs in a series of interviews that spans the course of five years. </p>
              <span className="categories"><i className="fa fa-tag" />Video Production</span>
            </div>
            <div className="link-box">
              <a href="http://www.assignedsex.com">Watch</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}
        </div> {/* row End */}
      </section> 
    );
  }
};