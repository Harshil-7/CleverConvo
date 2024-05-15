import { useState } from "react";
import { useLoginMutation } from "../redux/features/authApiSlice";
// import { setAuth } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useStateContext } from "../Context/index";

export default function useLogin(setActiveTab) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { isAuthenticated } = useStateContext();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    const { value, id } = e.target;
    setformData({ ...formData, [id]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    })
      .unwrap()
      .then(() => {
        console.log(isAuthenticated);
        isAuthenticated = true;
        console.log(isAuthenticated);
        toast.success("Logged in successfully.", {
          theme: "dark",
        });
        router.push("/chat");
      })
      .catch(() => {
        toast.error("Failed to Logged in account.", {
          theme: "dark",
        });
      });
  };
  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return {
    email,
    password,
    isLoading,
    onChange,
    onSubmit,
    handleTabToggle,
  };
}
