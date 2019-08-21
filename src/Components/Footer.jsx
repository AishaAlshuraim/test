import React  from 'react';
import './Footer.scss'

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Sport for Fun is an application which provides users aggregate information about availability and accessibility of sports and outdoor.</p>
            </div>
          
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">NAH!© 2019 </p>
            
              <p className="copyright-text">
                <a href="https://github.com/AishaAlshuraim/sport-for-fun/tree/master/sport-for-fun-app">github</a>
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}
