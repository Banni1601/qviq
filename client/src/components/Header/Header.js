import React, { useContext, useState } from "react";
import "./Header.css";
import { Data } from "../../Context/userContext";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



//Component for Header
function Header() {
  const navigate = useNavigate();
  const { state, setState } = useContext(Data);
  const [show, setShow] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  
   // navigate to about page
  const navigateToAbout = () => {
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/about");
    }
  };

   // navigate to Client page
  const navigateToClient = () => {
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/client");
    }
  };

   // navigate to Support page
  const navigateToSupport = () => {
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/support");
    }
  };

   // log out and navigate to login page
  const logoutComponent = () => {
    if (state.isUserLogin) {
      Cookies.remove("p_token");
      setState((i) => ({ ...i, isUserLogin: false }));
      navigate("/login", { replace: "/login" });
      setShow(false);
    } else {
      setShow(false);
      navigate("/login");
    }
  };

   // navigate to Account page
  const navigateToAccount = ()=>{
    if (Cookies.get("p_token") === undefined) {
      setLoginModal(true);
      navigate("/login");
    } else {
      navigate("/account");
    }
  }

   //  login And Logout page
  const loginAndLogout = () => {
    if (state.isUserLogin) {
      setShow(true);
    } else {
      setShow(false);
      navigate("/login");
    }
  };

  // sign in
  const clickSignup = () => {
    navigate("/register");
  };
  
  return (
    <div>
    {/* For Small Devices */}
      <div className="header-page-small-device fixed-top">
        <nav className="navbar navbar-dark bg-dark ">
          <div className="container-fluid">
            <Link to="" className="navbar-brand navbarName">
            QVIQ
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link to="/" className="nav-link " aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    
                    <button className="nav-link" onClick={navigateToAccount}>
                    Account
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={navigateToAbout}>
                      About Us
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={navigateToClient}>
                      Clients
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={navigateToSupport}>
                      Support
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={loginAndLogout}>
                      {state.isUserLogin ? "Logout" : "Login"}
                    </button>
                  </li>
                  <li className="nav-item" onClick={clickSignup}>
                    {!state.isUserLogin ? (
                      <Link to="/register" className="nav-link">
                        Sign up
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* For large Devices */}
      <div className="header-page-style fixed-top">
        <div className="header-page-website-name-style-div">
          <Link to="/" className="header-pages-features-style-para-style">
            <p className="header-page-website-name-style">QVIQ</p>
          </Link>
        </div>

        <div className="header-pages-features-style">
          <Link to="/" className="header-pages-features-style-para-style">
            <p className="header-pages-para-styles">Home</p>
          </Link>
        <p onClick={navigateToAccount} className=" header-pages-para-styles">
            Account
          </p>
          <p onClick={navigateToAbout} className=" header-pages-para-styles">
            About Us
          </p>
          <p onClick={navigateToClient} className=" header-pages-para-styles">
            Clients
          </p>
          <p onClick={navigateToSupport} className=" header-pages-para-styles">
            Support
          </p>
        </div>
        <div className="header-page-btns-tyle-div">
          <button
            className="header-page-btns-styles-div-styles"
            onClick={loginAndLogout}
          >
            {state.isUserLogin ? "Logout" : "Login"}
          </button>
          {!state.isUserLogin ? (
            <button
              onClick={clickSignup}
              className="header-page-btns-styles-div-styles"
            >
              {" "}
              <p>Sign Up</p>{" "}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {/*popup modal for logout*/}
      <Modal
        size="sm"
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Body>Are You Sure, Want to Logout</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            No
          </Button>
          <Button variant="primary" onClick={logoutComponent}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/*popup modal for Instruct*/}
      <Modal
        size="md"
        show={loginModal}
        onHide={() => setLoginModal(!loginModal)}
        backdrop="static"
        keyboard={false}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm" className="loginModal">
            Please Login or Signup for Access
          </Modal.Title>
        </Modal.Header>
     
      </Modal>
    </div>
  );
}

export default Header;
