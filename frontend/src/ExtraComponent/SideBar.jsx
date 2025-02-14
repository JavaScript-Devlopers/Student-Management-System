import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const Role = JSON.parse(localStorage.getItem("user"))?.role;

  const AdminSideBaarArr = [
    {
      name: "Dashboard",
      icon: "bi bi-grid",
      link: "/admin/dashboard",
    },
    {
      name: "All Student",
      icon: "bi bi-journal-text",
      link: "/admin/all-students",
    },
    {
      name: "All Teacher",
      icon: "bi bi-journal-text",
      link: "/admin/all-teachers",
    },
    {
      name: "All Staff",
      icon: "bi bi-journal-text",
      link: "/admin/all-staff",
    },
    {
      name: "Quize",
      icon: "bi bi-journal-text",
      link: "/admin/all-quizes",
    },
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