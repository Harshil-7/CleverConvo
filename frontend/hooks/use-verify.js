import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setAuth, finishIntialLoad } from "../redux/features/authSlice";
import { useVerifyMutation } from "../redux/features/authApiSlice";

export default function useVerify() {
  const dispatch = useAppDispatch();
  const [verfiy] = useVerifyMutation();

  useEffect(() => {
    verfiy(undefined)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
      })
      .finally(() => {
        dispatch(finishIntialLoad());
      });
  });
}
