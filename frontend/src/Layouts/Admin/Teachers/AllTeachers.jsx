import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useNavigate } from "react-router-dom";
import Content from "../../../ExtraComponent/Content/Contents";
import { getAllTeacherdata } from "../../../Services/admin/Teachers";
import { SquarePen, Trash2, Eye, View, RefreshCcw } from 'lucide-react';

const AllTeachers = () => {


    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const [getallteacher, setGetallteacher] = useState([]);



    useEffect(() => {
        getTeacher();
    }, [searchInput]);



    const getTeacher = async () => {
        try {
            const req = { search: searchInput };
            const res = await getAllTeacherdata(req);
            if (res.status) {
                setGetallteacher(res.data);
            } else {
                setGetallteacher([]);
            }
        } catch (error) {
            console.log("Error fetching teachers:", error);
        }
    };



    const resethandle = () => {
        setSearchInput("")
        getTeacher()
    };


    const columns = [
        {
            name: "Name",
            selector: (row) => <div title={row?.FullName || ""}>
                {row.FullName || ""}
            </div>,
            sortable: true,
            width: '15%',
        },
        {
            name: "Phone Number",
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
                <SquarePen onClick={() => navigate("/admin/edit-teacher", { state: { row } })} />
                <Trash2 />
            </div>,
            sortable: true,
            width: '10%',
        },
    ];


    return (
        <>
            <Content
                Page_title="All Teacher"
                button_status={true}
                backbutton_status={true}
                backForword={true}
                route="/admin/add-teacher"
                button_title="Add Teacher"
            >
                <div className="pagetitle">
                    <div className="mt-3 row">
                        <div className="col-lg-3">
                            <label>Search</label>
                            <input type="text" className="form-control" placeholder="search hear..." />
                        </div>
                        <div className="position-relative">
                            <input
                                type="text"
                                className="form-control ps-5 radius-10"
                                placeholder="Search Client"
                                onChange={(e) => setSearchInput(e.target.value)}
                                value={searchInput}
                            />
                            <span className="position-absolute top-50 product-show translate-middle-y">
                                <i className="bx bx-search" />
                            </span>
                        </div>
                        <div className="col-md-1">
                            <div className="refresh-icon mt-4">
                                <RefreshCcw onClick={resethandle} />
                            </div>
                        </div>
                    </div>
                    <Datatable
                        columns={columns}
                        data={getallteacher}
                        filter={false}
                    />
                </div>

            </Content>



        </>
    );
}

export default AllTeachers;