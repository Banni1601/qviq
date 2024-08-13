import React, { useContext } from "react";
import "./RegisterPage.css";
import { Data } from "../../Context/userContext";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

//Component for RegisterPage
function RegisterPage() {
  const { state, setState, popUps, setPopUps } = useContext(Data);
  const navigate = useNavigate();

  //navigate to login Form
  const navigateToLoginPage = () => {
    navigate("/login");
  };
  //change view of password
  const changeViewOfPasswordField = () => {
    setState((i) => ({ ...i, viewPassword: !state.viewPassword }));
  };
  //set phone Number
  const handleInputPhoneNo = (e) => {
    setState((i) => ({ ...i, phoneNo: e.target.value }));
  };

  //set gender
  const handleInputChangeGender = (e) => {
    setState((i) => ({ ...i, gender: e.target.value }));
    
  };

  //upload a Profile Photo
  const handleProfilePhoto = async (e) => {
    const image = e.target.files[0];
    try{
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "usersImages");
      data.append("cloud_name", "dwn5ul84h");
      const response = await fetch('https://api.cloudinary.com/v1_1/dwn5ul84h/image/upload',{
        method : "POST",
        body : data
      })
      const cloudData = await response.json();
    setState((i) => ({ ...i, profilePhoto: cloudData.url }));
    }
    catch(error){
      console.log({error:error.message});
    }
  };

  //upload a Cover Photo
  const handleChangeCoverPhoto = async (e) => {
    const image = e.target.files[0];
    try{
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "usersImages");
      data.append("cloud_name", "dwn5ul84h");
      const response = await fetch('https://api.cloudinary.com/v1_1/dwn5ul84h/image/upload',{
        method : "POST",
        body : data
      })
      const cloudData = await response.json();
    setState((i) => ({ ...i, coverPhoto: cloudData.url }));
    }
    catch(error){
      console.log({error:error.message});
    }
  };


  //set the country name
  const changeCountry = (e) => {
    setState((i) => ({ ...i, country: e.target.value }));

  };

  //set the Bio
  const changeBio = (e) => {
    setState((i) => ({ ...i, bio: e.target.value }));
    
  };

  //form Submit
  const onSubmitForm = async (e) => {
    e.preventDefault();

    if(!(state.userName && state.emailId && state.phoneNo && state.bio && state.gender && state.password && state.profilePhoto && state.coverPhoto && state.country)){
      setState(i=>({...i,registerStatus:true,registerMessage:"Give Data for All Fields"}))
      
    }
    else{
      
      setState(i=>({...i,registerStatus:true , registerMessage:"Plaesa wait"}))
      let formData = {
        name: state.userName,
        email: state.emailId,
        phoneNo:state.phoneNo,
        gender:state.gender,
        profilePhoto:state.profilePhoto,
        coverPhoto:state.coverPhoto,
        country:state.country,
        bio:state.bio,
        password: state.password
      };

      
      await axios
        .post("http://localhost:8000/api/signup", formData)
        .then((response) => {
          if (response.status === 200) {
            
            setPopUps((i) => ({ ...i, loading: true }));
            const p_token = response.data.token;
            Cookies.set("p_token", p_token, { expires: 30 });
            setState((i) => ({
              ...i,
              viewPassword: true,
              registerMessage: "Register Successful and wait for 2 secs",
              registerStatus: true
            }));
            setTimeout(() => {
              setState((i) => ({
                ...i,
                currentUserName: response.data.name,
                currentUserMailId: response.data.email,
                currentUserPhoneNo: response.data.phoneNo,
                currentUserGender: response.data.bio,
                currentUserProfilePhoto: response.data.profilePhoto,
                currentUserCoverPhoto: response.data.coverPhoto,
                currentUserBio: response.data.bio,
                currentUserCountry: response.data.country,
                currentUserQRCode: response.data.qrCode,
                currentUserQRCodeURL: response.data.qrCodeUrl,
                userName: "",
                emailId: "",
                phoneNo: "",
                gender: "",
                profilePhoto: "",
                coverPhoto: "",
                country: "",
                bio: "",
                password: "",
                registerStatus: false,
                isUserLogin: true
              }));
              setPopUps((i) => ({ ...i, showToast: true, loading: false }));
              navigate("/");
            }, 3000);
          }
          
        })
        .catch((error) => {
           if (error.response.status === 404) {
            setState((i) => ({
              ...i,
              registerMessage: "Give All Details",
              registerStatus: true
            }));
          } 
          else if (error.response.status === 500) {
            setState((i) => ({
              ...i,
              registerMessage: "Network problem please wait and try again",
              registerStatus: true
            }));
          }
          else if (error.response.status === 405) {
            setState((i) => ({
              ...i,
              registerMessage: "User already exist with this mail",
              registerStatus: true
            }));
          }
         
        });

        setState(i=>({...i,registerStatus:false , registerMessage:""}))
      
    }
  };

  // change to username
  const changeUserName = (e) => {
    setState((i) => ({ ...i, userName: e.target.value }));
    
  };

  // change to mailId
  const changeMailId = (e) => {
    setState((i) => ({ ...i, emailId: e.target.value }));
  
  };
  // change to Password
  const changePassword = (e) => {
    setState((i) => ({ ...i, password: e.target.value }));
   
  };

  return (
    <div className="Register-page">
      {/* Register Card */}
      <div className="Register-card">
        <h1 className="Register-heading">Please Signup</h1>
        {/* SignUp Form */}
        <form className="RegisterForm" onSubmit={onSubmitForm}>
          {/* USER NAME field */}
          <label htmlFor="input1" className="label-name">
            Full Name
          </label>
          <input
            type="text"
            id="input1"
            placeholder="Enter a Name"
            className="Register-input"
            onChange={changeUserName}
            required
          />
          {state.userNameError && (
            <p className="error-message">Name must contain 3 letters</p>
          )}
              {/* USER EmailID field */}
          <label htmlFor="input2" className="label-name">
            EMAILID
          </label>
          <input
            className="Register-input"
            type="mailaddress"
            id="input2"
            placeholder="Enter a Email Address"
            onChange={changeMailId}
            required
          />
          {state.mailIdError && (
            <p className="error-message">mailId must contain 10 letters</p>
          )}
   {/* Phone Number field */}
          <label htmlFor="phoneNumber" className="label-name">
            Phone Number
          </label>
          <input
            className="Register-input"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={state.phoneNo}
            onChange={handleInputPhoneNo}
            placeholder="Enter a Phone Number"
            required
          />
  {/* Gender field */}
          <label className="label-name">Gender</label>
          <div className="radio-buttons">
            <div className="radio-bottons-1">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={state.gender === "Male"}
                onChange={handleInputChangeGender}
                
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={state.gender === "Female"}
                onChange={handleInputChangeGender}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          {/* Profile Photo Field */}

          <label htmlFor="profilePhoto" className="label-name">
            Profile Photo
          </label>
          <div className="profilePhoto-button ">
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              className=""
              onChange={handleProfilePhoto}
              required
            />
          </div>

          {/* Cover Photo Field */}

          <label htmlFor="coverPhoto" className="label-name">
            Cover Photo
          </label>
          <div className="profilePhoto-button ">
            <input
              type="file"
              id="coverPhoto"
              name="coverPhoto"
              accept="image/*"
              onChange={handleChangeCoverPhoto}
              required
            />
          </div>

          {/* Country Field */}

          <label htmlFor="country" className="label-name">
            Country
          </label>
          <div className="select-style">
            <select
              id="country"
              name="country"
              value={state.country}
              onChange={changeCountry}
              required
            >
              <option value="">Select Country</option>
              <option value="Canada">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
             
            </select>
          </div>

          {/* Bio Field */}

          <label htmlFor="bio" className="label-name">
            Bio
          </label>
          <input
            type="date"
            className="dob"
            id="bio"
            name="bio"
            value={state.bio}
            onChange={changeBio}
            required
          />
  {/* Password field */}
          <label htmlFor="input3" className="label-name">
            PASSWORD
          </label>
          <input
            className="Register-input "
            type={state.viewPassword ? "password" : "text"}
            id="input3"
            placeholder="Enter a Password"
            onChange={changePassword}
            required
          />
          {state.passwordError && (
            <p className="error-message">password must contain 8 letters</p>
          )}

          <div className="Register-checkbox-div">
            <input
              className="Register-checkbox"
              type="checkbox"
              id="input4"
              onClick={changeViewOfPasswordField}
            />
            <label htmlFor="input4" className="label-name">
              Show Password
            </label>
          </div>
          {state.registerStatus && (
            <p className="register-successful">{state.registerMessage}</p>
          )}
          <button type="submit" className="Register-page-register-button">
            Register
          </button>
        </form>
        <button
          onClick={navigateToLoginPage}
          className="Register-page-Login-button"
        >
          Login
        </button>
      </div>
      {/*  PopUp for Successful Signup */}
      {popUps.loading ? (
        <Modal
          size="sm"
          show={popUps.loading}
          aria-labelledby="example-modal-sizes-title-sm"
          centered
          className="d-flex flex-row justify-content-center"
        >
          <Modal.Body className="d-flex">
            {" "}
            <strong className="">Please Wait...</strong>
            <Spinner animation="border" role="status" className="loader">
              <span className="visually-hidden"> </span>
            </Spinner>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default RegisterPage;
