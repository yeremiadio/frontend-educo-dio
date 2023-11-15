import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserByIdAsyncThunk } from "./slices/auth";
import { useDispatch } from "react-redux";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!token && !!userId) {
      dispatch(getUserByIdAsyncThunk({ userId }));
    }
  }, [token, userId, dispatch]);

  return !!token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
