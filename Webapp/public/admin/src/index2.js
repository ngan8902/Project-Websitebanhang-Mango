import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import Login from "account/Login";

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/admin/*" element={<Login />} />
//       <Route path="/" element={<Navigate to="/admin/login" replace />} />
//     </Routes>
//   </BrowserRouter>
<Login></Login>
);