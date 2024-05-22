import { Alert, Button, TextInput, Modal } from "flowbite-react";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';

import {
  ref,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  updateFail,
  updateStart,
  updateSuccess,
  deleteFail,
  deleteStart,
  deleteSuccess,
  signoutFail,
  signoutSuccess,
} from "../reduxTK/AuthSlice";
import { useDispatch } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.User);
  const [image, set_image] = useState(null);
  const [imageUrl, set_imageUrl] = useState(null);
  const filePickerRef = useRef();
  const [ImageUplodProcess, setImageUploadProcess] = useState(null);
  const [imageuploadError, setimageuploadError] = useState(null);
  const [formdata, setformdata] = useState({});
  const dispatch = useDispatch();
  const [imageuploaded, setimageuploaded] = useState(false);
  const [Updated, setUpdated] = useState(null);
  const [Deleted, setDeleted] = useState(null);
  const [PopUpWindow, setPopUpWindow] = useState(false);
  const { error } = useSelector((state) => state.User);

  const handleimage = (e) => {
    const file = e.target.files[0];
    if (file) {
      set_image(file);
      set_imageUrl(URL.createObjectURL(file));
    }
  };

  const UploadImage = () => {
    setimageuploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    setimageuploaded(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadProcess(progress.toFixed(0));
      },
      (error) => {
        setimageuploadError(
          "Could not upload image(file must be less than 2MB)" + error
        );
        setImageUploadProcess(null);
        set_image(null);
        set_imageUrl(null);
        setimageuploaded(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((DownloadURL) => {
          set_imageUrl(DownloadURL);
          setformdata({ ...formdata, profileImage: DownloadURL });
          setimageuploaded(false);
        });
      }
    );
  };
  const handlechanges = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleUpdateApi = async (e) => {
    e.preventDefault();
    if (Object.keys(formdata).length === 0) {
      setUpdated("there is nothing to update");
      setTimeout(() => {
        setUpdated(null);
      }, 1000);
      return;
    }
    try {
      dispatch(updateStart());
      const response = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch(updateFail(data.message));
      } else {
        dispatch(updateSuccess(data));
        setUpdated("User Detail Updated Successfully");
        setTimeout(() => {
          setUpdated(null);
        }, 1000);
      }
    } catch (error) {
      dispatch(updateFail(error.message));
    }
  };

  const HandleDelete = async () => {
    setPopUpWindow(false);
    try {
      dispatch(deleteStart());
      const response = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch(deleteFail(data.message));
      } else {
        dispatch(deleteSuccess());
        setDeleted("User Account Deleted Successfully");
        setTimeout(() => {
          setDeleted(null);
        }, 1000);
      }
    } catch (error) {
      dispatch(deleteFail(error.message));
    }
  };

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

  useEffect(() => {
    if (image) {
      UploadImage();
    }
  }, [image]);
  return (
    <div className="max-w-lg p-3 w-full flex flex-col m-auto">
      <h1 className="my-7 text-center font-semibold text-3xl">My Profile</h1>
      <h1 className="my-2 text-center font-sm text-sm">If You want to write Blogs,Let me know</h1>
      <form className="flex flex-col gap-3" onSubmit={handleUpdateApi}>
        <input
          type="file"
          accept="image/*"
          onChange={handleimage}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {ImageUplodProcess && (
            <CircularProgressbar
              value={ImageUplodProcess || 0}
              text={`${ImageUplodProcess}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62,152,199,${ImageUplodProcess / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageUrl ? imageUrl : currentUser.profileImage}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        {imageuploadError && <Alert color="failure">{imageuploadError}</Alert>}
        <TextInput
          defaultValue={currentUser.username}
          placeholder="User Name"
          id="username"
          type="text"
          onChange={handlechanges}
        ></TextInput>
        <TextInput
          defaultValue={currentUser.email}
          placeholder="User Email Id"
          id="email"
          type="email"
          onChange={handlechanges}
        ></TextInput>
        <TextInput
          placeholder="password"
          id="password"
          type="password"
          onChange={handlechanges}
        ></TextInput>
        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          outline
          disabled={imageuploaded}
        >
          Update
        </Button>
        {currentUser.isAdmin && (
          <Link to={"/create-post"}>
            <Button
              type="button"
              gradientDuoTone="purpleToPink"
              disabled={!currentUser.isAdmin}
              className="w-full"
            >
              Write a Blog
            </Button>
          </Link>
        )}
      </form>
      <div className="text-red-500 flex justify-between mt-2 cursor-pointer">
        <span
          onClick={() => {
            setPopUpWindow(true);
          }}
        >
          Delete Account
        </span>
        <span onClick={HandleSignOut} className="curser-pointer">
          Sign Out
        </span>
      </div>
      {Updated && <Alert className="mt-5">{Updated}</Alert>}
      {Deleted && <Alert className="mt-5">{Deleted}</Alert>}
      {/* {error && <Alert className="mt-5">{error}</Alert>} */}
      <Modal
        show={PopUpWindow}
        onClose={() => setPopUpWindow(false)}
        popup
        size="md"
      >
        <Modal.Header>Delete Account</Modal.Header>
        <Modal.Body>
          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2 mb-6">
              {" "}
              <AiOutlineExclamationCircle /> Are you sure want to delete your
              account
            </p>
            <div className="flex justify-center gap-5">
              <Button color="failure" onClick={HandleDelete}>
                Delete
              </Button>
              <Button color="green" onClick={() => setPopUpWindow(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashProfile;
