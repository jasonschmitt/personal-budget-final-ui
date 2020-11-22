import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col s4">
          <div className="center promo promo-example">
            <i className="material-icons">flash_on</i>
            <p className="promo-caption">Speeds up development</p>
            <p className="light center">
              We did most of the heavy lifting for you to provide a default
              stylings that incorporate our custom components.
            </p>
          </div>
        </div>
        <div className="col s4">
          <div className="center promo promo-example">
            <i className="material-icons">group</i>
            <p className="promo-caption">User Experience Focused</p>
            <p className="light center">
              By utilizing elements and principles of Material Design, we were
              able to create a framework that focuses on User Experience.
            </p>
          </div>
        </div>
        <div className="col s4">
          <div className="center promo promo-example">
            <i className="material-icons">settings</i>
            <p className="promo-caption">Easy to work with</p>
            <p className="light center">
              We have provided detailed documentation as well as specific code
              examples to help new users get started.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
