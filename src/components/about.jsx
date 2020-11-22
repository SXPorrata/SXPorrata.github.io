import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section id="about" className="pg-item">
          <h2>About Me</h2>
          <div className="row">
            <div className="about-photo-wrap align-right">
              <div className="img about-photo">
                <img src="images/me.jpg" alt=""/>
              </div>
            </div>
            <div className="about-text">
              <p>My name is Sean X. Porrata.  Finish this about me section</p>
              <p>
                Put some extra goodies here
              </p>
              <p>
                and some here too
              </p>

              <div style="margin-bottom: 50px;">
                <div style="margin-bottom: 20px;">
                  <strong>Education</strong>
                </div>
                <table className="education" style="width: 100%;">
                  <tr>
                    <td style="width: 25%;">
                      <span className="e-year"></span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}