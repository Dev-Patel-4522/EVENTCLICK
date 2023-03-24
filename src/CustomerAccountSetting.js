import React from "react";
import "./App.css";
import { useState } from "react";
// import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Drawer from "./Drawer";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { storage } from "./FIREBASE";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

/*--------------------------------Upload Image Dialog Function----------------------------------*/
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));



function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomerAccountSetting() {
  // Dialog Box Set
  const [open, setOpen] = useState(false);

  // Avatar Image Set
  // const [image, setImage] = useState("");

  //Dialog Box Open and Close Function
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/Images/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          alert("Upload Completed");
        });
      }
    );
  };

  return (
    <div className="customeraccountsetting-container text-center relative">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-15 mx-auto text-center">
          {/* ---------------------------------- Left Side Menu Drawer ----------------------------------------- */}

          <div className="w-full text-left p-0 m-0">
            <Drawer />
          </div>

          {/* ---------------------------------- Title ----------------------------------------- */}

          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#4484CE]">
              Account Setting
            </h1>
          </div>

          {/* ---------------------------------- Avatar ----------------------------------------- */}

          <div className="flex flex-col text-center w-full mb-5">
            <Stack direction="row" className="text-center place-content-center">
              <label class="file">
                <input hidden
                  type="file"
                  class="flex mx-auto mb-8 mr-8 text-white bg-[#4484CE] border-0 py-2 px-8 focus:outline-none"
                  // alt="Raj Shah/Image"
                  // src={imageAsUrl.imgUrl}
                  // alt={image}
                  onChange={handleChange}
                  // src={setImage}

                  // sx={{ width: 60, height: 60 }}
                  id="file"
                  aria-label="File browser example"
                />
                <span class="file-custom"></span>
              </label>
            </Stack>
            {/* <img src={imageAsUrl.imgUrl} alt="image tag" /> */}
          </div>

          {/* ----------------------------- Below Container --------------------------------------- */}
          <div className="flex flex-col text-center w-full mb-5">
            {/* ---------------------------------Avatar Upadte and Remove Button----------------------- */}
            <form
            // onSubmit={handleFireBaseUpload}
            >
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2  w-1/2  text-left">
                    <div className="relative">
                      <div className="p-2 w-full">
                        <button
                          onClick={handleUpload}
                          className="flex mx-auto mb-8 mr-8 text-white bg-[#4484CE] border-0 py-2 px-8 focus:outline-none hover:bg-white rounded hover:text-[#4484CE]"
                          // onClick={handleClickOpen}
                        >
                          Upload Image
                        </button>
                        <p hidden>{percent}</p>
                        {/* --------------------DialogBox--------------------------------- */}
                        <BootstrapDialog
                          onClose={handleClose}
                          aria-labelledby="customized-dialog-title"
                          open={open}
                        >
                          <BootstrapDialogTitle
                            id="customized-dialog-title"
                            onClose={handleClose}
                          >
                            Upload Image
                          </BootstrapDialogTitle>
                          <DialogContent dividers>
                            <Typography gutterBottom>
                              <input
                                accept="/image/*"
                                //   className={classes.input}
                                id="contained-button-file"
                                // multiple
                                type="file"
                                // onChange={handleImageAsFile}
                                // onChange={(handleImageAsFile) => {
                                //   const file =
                                //     handleImageAsFile.target.files[0];
                                //   if (
                                //     file &&
                                //     file.type.substring(0, 5) === "image"
                                //   ) {
                                //     setImage(file);
                                //   } else {
                                //     setImage(null);
                                //   }
                                // }}
                              />
                            </Typography>
                          </DialogContent>
                          <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                              Upload
                            </Button>
                          </DialogActions>
                        </BootstrapDialog>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 w-1/2 text-left">
                    <div className="relative">
                      <div className="p-2 w-full">
                        <button className="flex mx-auto  mb-8 ml-8 border-2 border-[#4484CE] text-[#4484CE] bg-[#4484CE]/16 py-2 px-8 focus:outline-none hover:bg-[#4484CE] rounded hover:text-white">
                          Remove Image
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {/* -----------------------------Input Section 1--------------------------------------- */}
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2  text-left">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name :
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="off"
                      defaultValue="Raj Shah"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 text-left">
                  <div className="relative">
                    <label
                      for="username"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Username :
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="off"
                      defaultValue="raj_s_20"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -----------------------------Input Section 2--------------------------------------- */}
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2  text-left">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="off"
                      defaultValue="rajshah20@gmail.com"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2 text-left">
                  <div className="relative">
                    <label
                      for="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Password :
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      autoComplete="off"
                      defaultValue="Raj@205"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" //A form with a password field that must contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter:
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------ Save Button ----------------------------------------- */}
            <div className="p-2 w-full">
              <button
                onClick={handleUpload}
                type="submit"
                className="flex mx-auto mt-5 text-white bg-[#4484CE] border-0 rounded-full py-2 px-8 focus:outline-none hover:bg-white hover:text-[#4484CE]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerAccountSetting;
