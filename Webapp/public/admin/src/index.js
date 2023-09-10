import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import storeRedux from "./store";


import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import Login from "views/Login";
import Signup from "views/Signup";
import axiosClient from "./utils/fetch.utils";

const root = ReactDOM.createRoot(document.getElementById("root"));
const longinPage = () => {
  return root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/*" element={<Navigate to="/admin/login"  />} />
        <Route path="/admin/login/signup" element={<Signup />} />
        <Route path="/admin/*" element={<Navigate to="/admin/login/signup"  />} />
      </Routes>
    </BrowserRouter>
  );
}

// lay token trong localStore -> gui xuong server thong qua api -> check token nay cho phep dang nhan khong 
  // -> token hop le: set authen bang true
  // -> token ko hop le: xoa token khoi localStore va authen la false
  let authen = false;
  const token = window.localStorage.getItem('tokenshop')
  if(token) {
    axiosClient.defaults.headers.common['authorization-shop'] = token
    axiosClient.get('/api/shop/authen').then((response) => {
      if(response && response.data && response.data.data) {
        const shopData = response.data.data;
        storeRedux.dispatch({
          type: 'shopData',
          shopData: shopData
        })
        root.render(
          <BrowserRouter>
            <Routes>
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route path="/" element={<Navigate to="/admin/dashboard" replace/>} />
            </Routes>
          </BrowserRouter>
        ); 
      } else {
        longinPage()
      }
    })
  } else {
    longinPage()
  }
