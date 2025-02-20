import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useNavigate } from "react-router-dom";
import Content from "../../../ExtraComponent/Content/Contents";
import { getAllStudent } from "../../../Services/admin/Student";
import { SquarePen, Trash2 } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [allStudnets, setAllStudnets] = useState([]);
  const [selectClass, setSelectClass] = useState("");
  const [selectSection, setSelectSection] = useState("");


  useEffect(() => {
    getStudents();
  }, []);


  const getStudents = async () => {
    try {
      const req = { classname: selectClass, section: selectSection }
      await getAllStudent(req).then((res) => {
        if (res.status) {
          setAllStudnets(res.data);
        }
        else {
          setAllStudnets([]);
        }
      })
        .catch((err) => {
          console.log(err);
        });
    }
    catch (error) {
      console.log(error);
    }
  }


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
      name: "Action",
      selector: (row) => <div title="Action">
        <SquarePen />
        <Trash2 />
      </div>,
      sortable: true,
      width: '10%',
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
          <div className="mt-3 row">
            <div className="col-lg-3">
              <label>Search</label>
              <input type="text" className="form-control" placeholder="search hear..." />
            </div>
            <div className="col-lg-3">
              <label>select class</label>
              <select className="form-control" onChange={(e) => setSelectClass(e.target.value)} value={selectClass}>
                <option>Class</option>
                <option>Class</option>
                <option>Class</option>
                <option>Class</option>
                <option>Class</option>
                <option>Class</option>

              </select>
            </div>
            <div className="col-lg-3">
              <label>select section</label>
              <select className="form-control" onChange={(e) => setSelectSection(e.target.value)} value={selectSection}>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"C"}>C</option>
                <option value={"D"}>D</option>
                <option value={"E"}>E</option>
              </select>

            </div>
          </div>
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