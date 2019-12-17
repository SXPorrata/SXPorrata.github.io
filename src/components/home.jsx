import React, { Component } from "react"

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" className="home-page">
          {/* this might need to get put in it's own component */}
          <div className="half-screen" style="z-index: 2;">
            <div className="light-screen">
              <div className="hs-content">
                <b className="icon-menu"></b>
                <div className="author">Sean X. Porrata</div>
                <div className="tagline"><h1><i>Rugby Player</i> Software Developer</h1></div>
                <nav className="main-menu">
                  <ul>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact"></a>Contact</li>
                  </ul>
                </nav>
                <nav className="social-links">
                  <ul className="animate">
                    <li><a href="https://github.com/SXPorrata" target="_blank">Take a look at my GitHub</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <a className="logo">Sean X. Porrata</a>
          </div>
          <div className="half-screen dark-screen">
            <div className="dark-image">
              <img src="images/desktop.jpg" alt=""/>
              <div className="dark-overlay"></div>
              <b className="icon-arr-down"></b>
              <div className="go-works">
                <a href="#works" className="button-white animate">View my works</a>
              </div>
              <div className="intro-message">
                <div className="im-text-wrap">
                  My name is Sean X. Porrata.  I'm a Rugby Player & Software Developer
                </div>
              </div>
            </div>
          </div>
          <b className="h-line"></b>
        </section>
      </div>
    )
  }
}