import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiTable, HiUser, HiDocumentText } from "react-icons/hi";
import { signoutFail, signoutSuccess } from "../reduxTK/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiUsers } from "react-icons/hi2";
const DashSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");
  const {currentUser} = useSelector((state)=>state.User)
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const HandleSignOut = async () => {
    try {
      const response = await fetch("/api/user/signout", { method: "POST" });
      const data = await response.json();
      if (!response.ok) {
        dispatch(signoutFail(data.message));
      } else {
        console.log(data.message);
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56 rounded-tr-lg">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-0">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin?"Admin":"User"}
              labelcolor="dark"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                labelcolor="dark"
              >
                All Posts
              </Sidebar.Item>
            </Link>
          )}
          {!currentUser.isAdmin && (
            <Link to="/dashboard?tab=allposts">
              <Sidebar.Item
                active={tab === "allposts"}
                icon={HiDocumentText}
                labelcolor="dark"
              >
                All Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=users">
              <Sidebar.Item
                active={tab === "users"}
                icon={HiUsers}
                labelcolor="dark"
              >
                All users
              </Sidebar.Item>
            </Link>
          )}
          <Sidebar.Item
            icon={HiTable}
            className="cursor-pointer"
            onClick={HandleSignOut}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
