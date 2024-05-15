import { useState } from "react";
import { useRegisterMutation } from "../redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useRegister(setActiveTab) {
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, phone_number, password, re_password } =
    formData;

  const onChange = (e) => {
    const { value, id } = e.target;
    setformData({ ...formData, [id]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register({
      first_name,
      last_name,
      email,
      phone_number,
      password,
      re_password,
    })
      .unwrap()
      .then(() => {
        toast.success("Please check email to verfiy account.", {
          theme: "dark",
        });
        handleTabToggle("login");
      })
      .catch(() => {
        toast.error("Failed to register account.", {
          theme: "dark",
        });
      });
  };
  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };

  return {
    first_name,
    last_name,
    email,
    phone_number,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
    handleTabToggle,
  };
}
