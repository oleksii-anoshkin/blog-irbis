import "firebaseui/dist/firebaseui.css";
import "./SingIn.css";
import {
  userSignIn,
  userSignOut,
  getUserName,
} from "../../firebase/Firebase-auth";
import { useState } from "react";

import UserImg from "./UserImg/UserImg";

export default function User({ parentClass }) {
  const componentClass = "user";
  const containerClass = `${parentClass}__${componentClass}-container`;
  const textClass = `${parentClass}__${componentClass}-text`;
  const btnClass = `${parentClass}__${componentClass}-btn`;
  const btnType = "button";
  const linkClass = "link";
  const signOutClass = "sign-out";
  const signInClass = "sign-in";

  const [isSignIn, setIsSignIn] = useState(false);

  function handleClickIn() {
    userSignIn(setIsSignIn);
  }

  function handleClickOut() {
    userSignOut(setIsSignIn);
  }

  return (
    <div className={containerClass}>
      {isSignIn && (
        <>
          <UserImg parentClass={parentClass} isSignIn={isSignIn} />
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className={textClass}>{getUserName()}</p>
              </div>
              <div className="flip-card-back">
                <button
                  className={`${btnClass} ${linkClass} ${signOutClass}`}
                  type={btnType}
                  onClick={handleClickOut}>
                  Вийти
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {!isSignIn && (
        <button
          className={`${btnClass} ${linkClass} ${signInClass}`}
          type={btnType}
          onClick={handleClickIn}>
          Увійти
        </button>
      )}
    </div>
  );
}
