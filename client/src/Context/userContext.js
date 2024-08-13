import React, { useState } from "react";

export const Data = React.createContext();

// Provider and Consumer the Data with Context
export const UserContext = ({ children }) => {
  const [state, setState] = useState({
    userName: "",
    emailId: "bunnyv082@gmail.com",
    phoneNo: "",
    gender: "",
    profilePhoto: "",
    coverPhoto: "",
    country: "",
    bio: "",
    password: "1234567890",
    viewPassword: true,
    userNameError: false,
    mailIdError: false,
    passwordError: false,
    registerStatus: false,
    registerMessage:"",
    loginMessage:"",
    loginStatus: false,
    isUserLogin: false,
    currentUserName: "",
    currentUserMailId: "",
    currentUserPhoneNo: "",
    currentUserGender: "",
    currentUserProfilePhoto: "",
    currentUserCoverPhoto: "",
    currentUserBio: "",
    currentUserCountry: "",
    currentUserQRCode: "",
    currentUserQRCodeURL: ""
  });
  const [popUps, setPopUps] = useState({ showToast: false, loading: false });

  return (
    <Data.Provider value={{ state, setState, popUps, setPopUps }}>
      {children}
    </Data.Provider>
  );
};

export default UserContext;
