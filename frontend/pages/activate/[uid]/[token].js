"use client";

import React, { useEffect } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { useActivationMutation } from "../../../redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function activate() {
  const router = useRouter();
  const [activation] = useActivationMutation();
  useEffect(() => {
    const { uid, token } = router.query;
    if (uid && token) {
      activation({ uid, token })
        .unwrap()
        .then(() => toast.success("Account activated"))
        .catch(() => toast.error("Failed to activate account."))
        .finally(() => {
          router.push("/login");
        });
    }
  }, [activation, router.query.uid, router.query.token]);
  return (
    <>
      <div
        style={{
          height: "100%",
          margin: "20%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1 className="text-white">
          <FaWandMagicSparkles style={{ color: "#20c997" }} />
          Activating your account...
          <FaWandMagicSparkles style={{ color: "#20c997" }} />
        </h1>
      </div>
    </>
  );
}
