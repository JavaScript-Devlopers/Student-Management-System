import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useNavigate } from "react-router-dom";
import Content from "../../../ExtraComponent/Content/Contents";
import { getAllStudent, getAllClass } from "../../../Services/admin/Student";
import { SquarePen, Trash2, Eye, View, RefreshCcw } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [allStudnets, setAllStudnets] = useState([]);
  const [selectClass, setSelectClass] = useState("");
  const [selectSection, setSelectSection] = useState("");
  const [allClass, setAllClass] = useState([]);


  useEffect(() => {
    getClass();
  }, []);

  useEffect(() => {
    getStudents();
  }
    , [selectClass, selectSection]);


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

  const getClass = async () => {
    const res = await getAllClass()
      .then((res) => {
        if (res.status) {
          setAllClass(res.data);
        }
        else {
          setAllClass([]);
        }
      })
      .catch((err) => {
        console.log(err);
      }
      );
  }


  const resethandle = () => {
    setSelectClass("")
    setSelectSection("")
    getStudents()
  };


  const columns = [
    {
      name: "Student Name",
      selector: (row) => <div title={row?.FullName || ""}>
        {row.FullName || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Student Phone Number",
      selector: (row) => <div title={row?.Student_PhoneNo || ""}>
        {row.Student_PhoneNo || ""}
      </div>,
      sortable: true,
      width: '15%',
    },

    {
      name: "Email",
      selector: (row) => <div title={row?.Email || ""}>
        {row.Email || ""}
      </div>,
      sortable: true,
      width: '15%',
    },

    {
      name: "Enrolment Number",
      selector: (row) => <div title={row?.Enrolment_Number || ""}>
        {row.Enrolment_Number || ""}
      </div>,
      sortable: true,
      width: '15%',
    },
    {
      name: "Gender",
      selector: (row) => (
        <div title={row?.Gender === 0 ? "Male" : row?.Gender === 1 ? "Female" : "Other"}>
          {row?.Gender === 0 ? "Male" : row?.Gender === 1 ? "Female" : "Other"}
        </div>
      ),
      sortable: true,
      width: "15%",
    },
    {
      name: "View",
      selector: (row) => <div title="View">
        <Eye />
      </div>,
      sortable: true,
      width: '10%',
    },
    {
      name: "Action",
      selector: (row) => <div title="Action">
        <SquarePen onClick={() => navigate("/admin/edit-students", { state: { row } })} />
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
                <option value={""}>Select Class</option>
                {allClass.map((item, index) => {

                  return (
                    <option key={index} value={item._id}>{item.className}</option>

                  );
                })}
              </select>
            </div>
            <div className="col-lg-3">
              <label>select section</label>
              <select className="form-control" onChange={(e) => setSelectSection(e.target.value)} value={selectSection}>
                <option value={""}>Select</option>
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"C"}>C</option>
                <option value={"D"}>D</option>
                <option value={"E"}>E</option>
              </select>

            </div>
            <div className="col-md-1">
              <div className="refresh-icon mt-4">
                <RefreshCcw onClick={resethandle} />
              </div>
            </div>
          </div>
          <Datatable
            columns={columns}
            data={allStudnets}
            filter={false}
          />
        </div>

      </Content>



    </>
  );
}

export default Dashboard;