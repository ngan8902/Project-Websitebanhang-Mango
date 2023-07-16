import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";

var routes = [
  {
    path: "/dashboard",
    name: "Trang chủ",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Danh sách sản phẩm",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Thông tin người dùng",
    icon: "nc-icon nc-single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Thông báo",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Bản đồ",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
  },
];
export default routes;
