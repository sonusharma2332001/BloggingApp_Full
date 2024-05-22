import React from "react";
import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";
import { app } from "../firebase";
import { Link ,useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { signInStart,signInFailure,signInSccess } from '../reduxTK/AuthSlice';
import { useDispatch,useSelector } from 'react-redux';

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{loading,error} = useSelector(state =>state.User)

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      dispatch(signInStart());
      const Googledata = await signInWithPopup(auth, provider);
      const response = await fetch('/api/auth/google_auth',
      {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          username:Googledata.user.displayName,
          email:Googledata.user.email,
          googlePhotoUrl:Googledata.user.photoURL,
        }),
      });
      const data = await response.json();
      if(data.success===false){
        dispatch(signInFailure(data.message));
      }
      if(response.ok){
        dispatch(signInSccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleGoogleAuth}
    >
      <FaGoogle className="w-5 h-5 mr-2" />
      <span>Continue with Google</span>
    </Button>
  );
};

export default OAuth;
