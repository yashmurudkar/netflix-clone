import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png"
          alt=""
        />
        <button
          className={`loginScreen__button ${
            signIn && "loginScreen__buttonHide"
          }`}
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h2>Unlimited movies, TV shows and more.</h2>
            <h3>Watch anywhere. Cancel at any time.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart you
              membership
            </h4>

            <div className="loginScreen__input">
              <form>
                <input className="" type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
