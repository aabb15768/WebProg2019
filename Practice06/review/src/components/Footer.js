import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://www.flickr.com/photos/143853988@N07/albums">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-flickr fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/profile.php?id=100000890692143">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/belong112">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; BELONG'S Website 2019</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;