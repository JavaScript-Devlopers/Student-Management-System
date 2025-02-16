import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'

const Dashboard = () => {

  const [students, setStudents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [dashboardData, setDashboardData] = useState({});


  const data = [
    {
      
    }
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
    {
      name: "Created At",
      selector: (row) => <div title={row?.createdAt || ""}>
        {row.createdAt || ""}
      </div>,
      sortable: true,
      width: '15%',
    },






  ];

  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <Datatable
          columns={columns}
          data={data}
          filter={false}

        />

      </div>



    </>
  );
}

export default Dashboard;