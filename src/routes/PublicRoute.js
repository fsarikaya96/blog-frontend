import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Public/Home/Index";
import Project from "../pages/Public/Project/Index";
import Blog from "../pages/Public/Blog/Index";
import Post from "../pages/Public/Post/Index";


export default function PublicRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/posts" element={<Post />} />
    </Routes>
  );
}
