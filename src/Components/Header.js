import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSeachOption } from "../movieSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { SearchOption } = useSelector((store) => store?.movies);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(setSeachOption());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleAlert = () => {
    if (window.confirm("Are you sure you want to sign-out!")) {
      var txt = "You pressed OK!";
      handleSignOut();
    } else {
      var txt = "You pressed Cancel!";
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className=" w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex absolute ">
      <img
        className="w-44 ml-[27%] md:ml-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt=""
      />

      <button
        onClick={() => {
          handleAlert();
        }}
        className="w-auto mt-3 p-1  shadow-sm bg-red-700 text-white rounded-lg ml-[70%]  md:ml-[90.5%] md:mt-2 py-2  cursor-pointer px-[1vw] absolute z-10"
      >
        Sign Out
      </button>

      <button
        className="bg-purple-700 mt-3 text-white rounded-lg ml-[0%] md:ml-[85%] md:mt-2 py-2  cursor-pointer px-3 absolute z-10"
        onClick={handleClick}
      >
        {SearchOption ? <h1>Home</h1> : <h1>Search</h1>}{" "}
      </button>
    </div>
  );
};

export default Header;
