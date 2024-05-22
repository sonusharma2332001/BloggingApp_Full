import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {Alert, Button, Label, Spinner, TextInput} from "flowbite-react";
import OAuth from '../Components/OAuth';

const SignUp = () => {
  const [UserData,setUserData] = useState({});
  const [loading,setloading] = useState(false);
  const [errorm,seterrorm] = useState();
  const navigate = useNavigate();
  const handlechange = (e)=>{
    setUserData({...UserData,[e.target.id]:e.target.value.trim()})
  }

  const handleSubmit =  async(e)=>{
    e.preventDefault();
    if(!UserData.username || !UserData.email ||!UserData.password){
      return seterrorm('Please fill out all form fields');
    }
    // console.log(UserData);
    try {
      setloading(true);
      seterrorm(null);
      const response = await fetch('/api/auth/signup',
      {
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(UserData),
      });
      const data = await response.json();
      if(data.success===false){
        return seterrorm(data.message);
      }
      setloading(false);
      if(response.ok){
        navigate('/signin');
      }
    } catch (error) {
      seterrorm(error.message);
      setloading(false);
    }
  }

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left view of the main div */}
        <div className="flex-1">
          <div>
            <div className="sm:text-xl font-bold dark:text-white">
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l text-white">
                Jack
              </span>
              Sparrow
            </div>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi, exercitationem numquam nihil, autem veniam rem dolorum modi quidem sit, earum maxime temporibus quod culpa! Dolores quas officiis magni illum beatae eaque aut impedit, nisi commodi placeat corrupti, earum saepe culpa. Consectetur soluta odit voluptas harum exercitationem laborum modi alias.</p>
          </div>
        </div>
        {/* Right view of main div */}
        <div className="flex-1">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <Label>Your Name</Label>
              <TextInput type="text" placeholder="Your Name" id="username" onChange={handlechange}/>
            </div>
            <div className="flex flex-col">
              <Label>Your Email</Label>
              <TextInput type="email" placeholder="Your Email" id="email" onChange={handlechange} />
            </div>
            <div className="flex flex-col">
              <Label>Password</Label>
              <TextInput type="password"placeholder="Password" id="password" onChange={handlechange} />
            </div>
            <Button type="submit" disabled={loading} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center">
              {loading?(<div className="flex gap-3">
                <Spinner size="sm"/>
                <span>loading...</span>
              </div>):'Sign Up'}</Button>
              <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-2">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">SignIn</Link>  
          </div>
          {errorm &&(
            <Alert className="mt-5" color='failure'>
              {errorm}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
