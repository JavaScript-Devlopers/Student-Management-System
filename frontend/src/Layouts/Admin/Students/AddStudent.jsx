import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useFormik } from "formik";
import * as Yup from "yup";
import AddFrom from "../../../Components/ReusableFrom";
import Content from "../../../ExtraComponent/Content/Contents";
import { AddStudent , getAllSubject } from "../../../Services/admin/Student";
import Swal from "sweetalert2";

const Dashboard = () => {

    const [students, setStudents] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [dashboardData, setDashboardData] = useState({});


    useEffect(() => {
        getSubject();
    }, []);


    const formik = useFormik({
        initialValues: {
            FullName: "",
            Email: "",
            Student_PhoneNo: "",
            Password: "",
            Enrolment_Number: "",
            Class_id: "",
            Gender: "",
            DOB: "",
            Address: "",
            subject: "",
            Role: "",
            Alternate_PhoneNo: "",
            FatherName: "",
            Mother_Name: "",
            PhoneNo: "",
            section: "",
            District: "",
            State: "",

        },
        validate: (values) => {
            const errors = {};
            if (!values.FullName) {
                errors.FullName = "Required";
            }
            if (!values.Email) {
                errors.Email = "Required";
            }
            if (!values.Student_PhoneNo) {
                errors.Student_PhoneNo = "Required";
            }
            if (!values.Password) {

                errors.Password = "Required";
            }
            if (!values.Enrolment_Number) {
                errors.Enrolment_Number = "Required";
            }
            if (!values.Class_id) {
                errors.Class_id = "Required";
            }


            if (!values.Gender) {
                errors.Gender = "Required";
            }
            if (!values.DOB) {
                errors.DOB = "Required";
            }
            if (!values.Address) {
                errors.Address = "Required";
            }
            if (!values.subject) {
                errors.subject = "Required";
            }



            if (!values.FatherName) {
                errors.FatherName = "Required";
            }
            if (!values.Mother_Name) {
                errors.Mother_Name = "Required";
            }
            if (!values.PhoneNo) {
                errors.PhoneNo = "Required";
            }
            if (!values.section) {
                errors.section = "Required";
            }
            if (!values.District) {
                errors.District = "Required";
            }
            if (!values.State) {
                errors.State = "Required";
            }
            console.log("errors", errors);
            return errors;
        },

        onSubmit: async (values) => {
            const req = {
                FullName: values.FullName,
                Email: values.Email,
                Student_PhoneNo: values.Student_PhoneNo,
                Password: values.Password,
                Enrolment_Number: values.Enrolment_Number,
                // Class_id: values.Class_id,
                Class_id: "67b069363192978d129230d8",
                Gender: values.Gender,
                DOB: values.DOB,
                Address: values.Address,
                subject: values.subject,
                Role: "1",
                Alternate_PhoneNo: values.Alternate_PhoneNo,
                FatherName: values.FatherName,
                Mother_Name: values.Mother_Name,
                PhoneNo: values.PhoneNo,
                section: values.section,
                District: values.District,
                State: values.State,
            };

            console.log("ss", req);
            await AddStudent(req)
                .then((res) => {
                    if (res.status) {
                        Swal.fire({
                            icon: "success",
                            title: "Student Added Successfully",
                        });

                        formik.resetForm();
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Something went wrong",
                        });

                    }
                })
                .catch((err) => {
                    console.log(err);

                });



        }

    });


    const fields = [
        {
            name: "FullName",
            label: "Student Name",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Email",
            label: "Email",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Student_PhoneNo",
            label: "Student Phone number",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Password",
            label: "Password",
            type: "password",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Enrolment_Number",
            label: "Roll number",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Gender",
            label: "Gender",
            type: "select",
            options: [
                { value: "0", label: "Male" },
                { value: "1", label: "Female" },
                { value: "2", label: "Other" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "DOB",
            label: "Date of Birth",
            type: "date",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Class_id",
            label: "Class",
            type: "select",
            options: [
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
                { value: "6", label: "6" },
                { value: "7", label: "7" },
                { value: "8", label: "8" },
                { value: "9", label: "9" },
                { value: "10", label: "10" },
                { value: "11", label: "11" },
                { value: "12", label: "12" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "section",
            label: "Section",
            type: "select",
            options: [
                { value: "A", label: "A" },
                { value: "B", label: "B" },
                { value: "C", label: "C" },
                { value: "D", label: "D" },
                { value: "E", label: "E" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Address",
            label: "Address",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "District",
            label: "District",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "State",
            label: "State",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "subject",
            label: "Subjects",
            type: "select",
            options: allStudents.map((subject) => ({
                value: subject._id,
                label: subject.Subject_Name,
            })),
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "FatherName",
            label: "Father Name",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,

        },
        {
            name: "Mother_Name",
            label: "Mother Name",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "PhoneNo",
            label: "Father Phone number",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Alternate_PhoneNo",
            label: "Alternate Phone number",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,

        },


    ];

    const getSubject = async () => {
        const res = await getAllSubject()
            .then((res) => {
                if (res.status) {
                    setAllStudents(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Content
                Page_title="Add Student"
                button_status={false}
                backbutton_status={true}
                backForword={true}
            >
                <div className="mt-5">

                    <AddFrom
                        fields={fields.filter(
                            (fields) => !fields.showWhen || fields.showWhen(formik.values)
                        )}
                        btn_name="Add Student"
                        hide_cancle_btn={false}
                        hide_submit_btn={false}
                        formik={formik}

                    />

                </div>
            </Content>


        </>
    );
}

export default Dashboard;