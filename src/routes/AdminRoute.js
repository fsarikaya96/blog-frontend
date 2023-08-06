import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/Admin/Auth/Login";
import Post from "../pages/Admin/Post/Index";

export default function AdminRoute() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<Post />} />
     
    </Routes>
  );
}
