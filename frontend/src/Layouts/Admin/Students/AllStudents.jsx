import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useNavigate } from "react-router-dom";
import Content from "../../../ExtraComponent/Content/Contents";

const Dashboard = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [dashboardData, setDashboardData] = useState({});


  const data = [
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
    {
      username: "John Doe",
      fullname: "John Doe",
      email: "",
      phone: "1234567890",
      status: "Active",
    },
  ]

  const columns = [
    {
      name: "User Name",
      selector: (row) => <div title={row?.username || ""}>
        {row.username || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Full Name",
      selector: (row) => <div title={row?.fullname || ""}>
        {row.fullname || ""}
      </div>,
      sortable: true,
      width: '20%',
    },
    {
      name: "Email",
      selector: (row) => <div title={row?.email || ""}>
        {row.email || ""}
      </div>,
      sortable: true,
      width: '20%',
    },
    {
      name: "Phone",
      selector: (row) => <div title={row?.phone || ""}>
        {row.phone || ""}
      </div>,
      sortable: true,
      width: '15%',
    },

    {
      name: "Status",
      selector: (row) => <div title={row?.status || ""}>
        {row.status || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Last Login",
      selector: (row) => <div title={row?.lastLogin || ""}>
        {row.lastLogin || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
  ];


  return (
    <>
      <Content
        Page_title="All Student"
        button_status={true}
        backbutton_status={true}
        backForword={true}
        route="/admin/add-students"
        button_title="Add Student"
      >
        <div className="pagetitle">
          <Datatable
            columns={columns}
            data={data}
            filter={false}
          />
        </div>

      </Content>



    </>
  );
}

export default Dashboard;