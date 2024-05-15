"use client";

import { ToastContainer } from "react-toastify";
import { useVerify } from "../../hooks/index";
import "react-toastify/dist/ReactToastify.css";

export default function Setup() {
  // try {
  //   useVerify();
  // } catch (e) {
  //   console.log(e);
  // }
  return <ToastContainer />;
}
