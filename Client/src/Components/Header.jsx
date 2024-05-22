import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
  TextInput,
} from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggletheme } from "../reduxTK/ThemeSlice";
import { signoutFail,signoutSuccess } from "../reduxTK/AuthSlice";

const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.User);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const HandleSignOut = async()=>{
    try {
      const response = await fetch('/api/user/signout',{method:"POST"});
      const data = await response.json();
      if(!response.ok){
          dispatch(signoutFail(data.message));
      }
      else{
        console.log(data.message);
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      console.log(inputValue);
      navigate(`/search?searchTerm=${inputValue}`);
    }
  };

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l text-white">
          Jack
        </span>
        Sparrow
      </Link>
      <form onSubmit={handleSearch}>
      <TextInput
        type="text"
        placeholder="Search..."
        rightIcon={IoSearchOutline}
        value={inputValue}
        onChange={handleInputChange}
        className="hidden lg:inline"
      />
    </form>
      <div className="flex gap-3 md:order-2">
        <Button
          className="w-12 h-10 "
          color="gray"
          onClick={() => dispatch(toggletheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User" img={currentUser.profileImage} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={HandleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              SignIn
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/">
          <Navbar.Link active={path === "/"} as={"div"}>
            Home
          </Navbar.Link>
        </Link>

        <Link to="/about">
          <Navbar.Link active={path === "/about"} as={"div"}>
            About
          </Navbar.Link>
        </Link>

        <Link to="/projects">
          <Navbar.Link active={path === "/projects"} as={"div"}>
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
