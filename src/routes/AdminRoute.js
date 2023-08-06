import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/Admin/Auth/Login";
import Post from "../pages/Admin/Post/Index";

export default function AdminRoute() {

  return (
    <Routes>
      <Route path="admin/login" element={<Login />} />
      <Route path="admin/posts" element={<Post />} />    
    </Routes>
  );
}
