import React, { Component } from 'react'

export default class Works extends Component {
  render() {
    return (
      <div>
        <section className="inside-pages">
          <aside className="sidebar">
            <div className="side-logo-wrap">
              <div className="slw-light">
                <a href="#home" className="slw-logo">Sean X. Porrata</a>
              </div>
              <div className="slw-dark"></div>
            </div>
            <nav className="side-menu">
              <ul className="animate">
                <li className="home">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#works">Works</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </aside>
          <article className="page-sections">
            <section className="pg-item" id="works">
              <h2>Works</h2>
              <div className="work-list animate">
                {/* extract work item into it's own component so I don't have to write this out again */}
                <div className="work-item">
                  <a href="work-twelve.html" className="work-item-line">
                    <span className="clearfix">
                      <span className="work-item-left">
                        <img src="images/desktop.jpg" alt="" className="work-item-img"/>
                        <span className="work-item-title"><b>View Project</b></span>
                      </span>
                      <span className="work-item-right">
                        <span className="wi-title">Theme</span>
                        <span className="wi-text">SOmething goes here</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </article>
        </section>
      </div>
    )
  }
}