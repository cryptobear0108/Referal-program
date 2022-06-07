// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import React, { useState, useEffect } from "react";
import SmallLogo from "../../assets/images/logo/logo.png";
import { Outlet, Link } from "react-router-dom";

const HeaderFir = () => {
  // -------- menu cbp-af-header-shrink class add --------
  const [classAdd, setClassAdd] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setClassAdd(false);
    } else {
      setClassAdd(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      id="menu-wrap"
      className={`menu-wrap menu-back cbp-af-header ${
        classAdd ? "" : "cbp-af-header-shrink"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light mx-lg-0">
              <a className="navbar-brand" href="/">
                <img src={SmallLogo} alt="" style={{height:'2.6rem'}}/>
              </a>
              <button
                className={`navbar-toggler ${show ? "collapsed" : ""}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-expanded={`${show ? false : true}`}
                aria-label="Toggle navigation"
                onClick={handleClick}
              >
                <span className="navbar-toggler-icon">
                  <span className="menu-icon__line menu-icon__line-left"></span>
                  <span className="menu-icon__line"></span>
                  <span className="menu-icon__line menu-icon__line-right"></span>
                </span>
              </button>

              <div
                className={`navbar-collapse collapse justify-content-end ${show ? "" : "show"}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto" style={{alignItems:'center'}}>
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="/"
                      data-ps2id-offset="120"
                    >
                      Home
                    </a>
                    {/* <Link to="home">Home</Link> */}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Introduce
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Token
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link __mPS2id"
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/dapp"
                      className="btn btn-primary js-tilt __mPS2id"
                    >
                      Pre-sale
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFir;
