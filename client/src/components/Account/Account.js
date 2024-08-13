import React ,{useContext} from 'react'
import { Data } from '../../Context/userContext'
import "./Account.css"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
 import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


// display for LoggedIn User data
const User = () => {

  const { state}=useContext(Data);
  const navigate = useNavigate();
  if (Cookies.get("p_token") === undefined) {
    return navigate("/login"); // navigate to the Login Page
  }
      
  return(
    
    <div className="profile-container mt-5">
      <div className="cover-image mt-5" style={{ backgroundImage: `url(${state.currentUserCoverPhoto})` }}>
        <img src={state.currentUserProfilePhoto} alt="Profile" className="profile-photo" />
      </div>

      <div className="profile-info">
        <h1>{state.currentUserName}</h1>
        <p><strong>Email:</strong> {state.currentUserMailId}</p>
        <p><strong>Phone:</strong> {state.currentUserPhoneNo}</p>
        <p><strong>Date of Birth:</strong> {state.currentUserBio}</p>
        <p><strong>Gender:</strong> {state.currentUserGender}</p>
        <p><strong>Country:</strong> {state.currentUserCountry}</p>
        <img src={state.currentUserQRCode} alt="QR Code" className="qr-code" />
      </div>
    </div>
    

  )
}


//return the User Component
function Account() {
  return (
    <div>
      {<User/>}
    </div>
  )
}

export default Account;