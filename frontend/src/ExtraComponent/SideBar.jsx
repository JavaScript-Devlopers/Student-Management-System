import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const Role = localStorage.getItem("role");

  const AdminSideBaarArr = [
    {
      name: "Dashboard",
      icon: "bi bi-grid",
      link: "/admin/dashboard",
      child: []
    },
    {
      name: "All Student",
      icon: "bi bi-people", 
      link: "/admin/all-students",
      child: []
    },
    {
      name: "All Teacher",
      icon: "bi bi-person-badge", 
      link: "/admin/all-teachers",
      child: []
    },
    {
      name: "All Employee",
      icon: "bi bi-briefcase", 
      link: "/admin/all-employee",
      child: []
    },
    {
      name: "Parent",
      icon: "bi bi-person-heart", 
      link: "/admin/parent",
      child: []
    },
    {
      name: "Timetable",
      icon: "bi bi-calendar-week", 
      link: "/admin/time-table",
      child: []
    },
    {
      name: "Settings",
      icon: "bi bi-gear", 
      link: "/admin/Settings",
      child: []
    }
  ];
  

  const UserSideBaarArr = [
    {
      name: "Dashboard",
      icon: "bi bi-grid",
      link: "/student/dashboard",
    },
    {
      name: "Enrolled Test Series",
      icon: "bi bi-journal-text",
      link: "/student/enrolled-test-series",
    },
    {
      name: "Test Series",
      icon: "bi bi-journal-text",
      link: "/student/test-series"
    }
  ];

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

          {Role == "ADMIN" && AdminSideBaarArr?.map((item, index) => (
            <li className="nav-item"
              style={{ cursor: "pointer " }}
              key={index}
            >
              <div className="nav-link " onClick={() => navigate(item.link)} >
                <i className={item.icon} />
                <span>{item.name}</span>
              </div>
            </li>
          ))}
          {Role == "USER" && UserSideBaarArr?.map((item, index) => (
            <li className="nav-item"
              style={{ cursor: "pointer " }}
              key={index}
            >
              <div className="nav-link " onClick={() => navigate(item.link)} >
                <i className={item.icon} />
                <span>{item.name}</span>
              </div>
            </li>
          ))}


        </ul>
      </aside>

    </>


  );
}
export default Login;