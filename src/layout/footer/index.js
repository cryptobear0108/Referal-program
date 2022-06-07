import React from "react";
import logoImg from '../../assets/images/logo/logo.png';
const Footer = () => {
    return (
        <footer className="footer-light border-top-0 pt-0">
        <div className="subfooter" style={{backgroundSize:'cover'}}>
          <div className="container" style={{backgroundSize:'cover'}}>
            <div className="row" style={{backgroundSize:'cover'}}>
              <div className="col-md-12" style={{backgroundSize:'cover'}}>
                <div className="de-flex" style={{backgroundSize:'cover'}}>
                  <div className="de-flex-col" style={{backgroundSize:'cover'}}>
                    <a href="https://raresea.org/"
                      ><img
                        alt=""
                        className="f-logo"
                        src={logoImg}
                        style={{height:'2.6rem'}}
                    /></a>
                    <span>© Copyright 2022 - RareSea</span>
                  </div>
                  <div className="de-flex-col" style={{backgroundSize:'cover'}}>
                    <div className="social-icons" style={{backgroundSize:'cover'}}>
                      <a href="https://t.me/RareSea" target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i
                      ></a>
                      <a
                        href="https://twitter.com/RareSeaOfficial"
                        target="_blank" rel="noreferrer"
                        ><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
