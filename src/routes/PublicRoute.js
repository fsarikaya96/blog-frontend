import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Public/Homepage/Home'

export default function PublicRoute(){
    return (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      );
}
