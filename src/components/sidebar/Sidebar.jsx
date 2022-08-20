import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const items = [
    {
      name: "Dashboard",
      title: "MAIN",
      icon: <DashboardIcon className="icon" />,
    },
    {
      name: "Users",
      title: "LISTS",
      icon: <PersonOutlineIcon className="icon" />,
    },
    {
      name: "Products",
      icon: <StoreIcon className="icon" />,
    },
    {
      name: "Orders",
      icon: <CreditCardIcon className="icon" />,
    },
    {
      name: "Delivery",
      icon: <LocalShippingIcon className="icon" />,
    },
    {
      name: "Stats",
      title: "USEFUL LINKS",
      icon: <InsertChartIcon className="icon" />,
    },
    {
      name: "Notifications",
      icon: <NotificationsNoneIcon className="icon" />,
    },
    {
      name: "SystemHealth",
      title: "SERVICES",
      icon: <SettingsSystemDaydreamOutlinedIcon className="icon" />,
    },
    {
      name: "Logs",
      icon: <PsychologyOutlinedIcon className="icon" />,
    },
    {
      name: "Settings",
      icon: <SettingsApplicationsIcon className="icon" />,
    },
    {
      name: "Profile",
      title: "USER",
      icon: <AccountCircleOutlinedIcon className="icon" />,
    },
    {
      name: "Logout",
      icon: <ExitToAppIcon className="icon" />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">lamadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {items.map((item, index) => (
            <>
              <p className="title">{item.title}</p>
              <li key={index}>
                {item.icon}
                <span>{item.name}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
