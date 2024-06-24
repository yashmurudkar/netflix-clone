import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const plans = [
    {
      plan: "Netflix Standard",
      resolution: "1080p",
      button: "Subscribe",
    },
    {
      plan: "Netflix Basic",
      resolution: "480p",
      button: "Subscribe",
    },
    {
      plan: "Netflix Premium",
      resolution: "4K+HDR",
      button: "Current Package",
    },
  ];

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans Current Plan: premium</h3>
              <h5>Renewal date: 01/03/2024</h5>
              {plans.map((element) => (
                <>
                  <div className="profileScreen__plan">
                    <h4>{element.plan}</h4>
                    <h5>{element.resolution}</h5>
                    <div className="profileScreen__button">
                      <button>{element.button}</button>
                    </div>
                  </div>
                </>
              ))}
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signoutButton"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
