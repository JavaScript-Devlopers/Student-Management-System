import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useFormik } from "formik";
import * as Yup from "yup";
import AddFrom from "../../../Components/ReusableFrom";
import Content from "../../../ExtraComponent/Content/Contents";
import { UpdateStudent , getAllSubject , getAllClass } from "../../../Services/admin/Student";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
    const [allStudents, setAllStudents] = useState([]);
    const [allClass, setAllClass] = useState([]);


    useEffect(() => {
        getSubject();
        getClass();

    }, []);

     

  

    useEffect(() => {
        if (location.state.row) {
           formik.setValues({
                FullName: location.state.row.FullName,
                Email: location.state.row.Email,
                Student_PhoneNo: location.state.row.Student_PhoneNo,
                Password: location.state.row.Password,
                Enrolment_Number: location.state.row.Enrolment_Number,
                Class_id: location.state.row.Class_id,
                DOB: location.state.row.DOB.split("T")[0],
                Gender: location.state.row.Gender,
                Address: location.state.row.Address,
                subject: location.state.row.subject,
                Role: location.state.row.Role,
                Alternate_PhoneNo: location.state.row.Parent.Alternate_PhoneNo,
                FatherName: location.state.row.Parent.FatherName,
                Mother_Name: location.state.row.Parent.Mother_Name,
                PhoneNo: location.state.row.Parent.PhoneNo,
                section: location.state.row.section,
                District: location.state.row.District,
                State: location.state.row.State,
            });


        }
    }, [location.state.row]);



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
                _id : location.state.row._id,
                FullName: values.FullName,
                Email: values.Email,
                Student_PhoneNo: values.Student_PhoneNo,
                Password: "",
                Enrolment_Number: values.Enrolment_Number,
                Class_id: values.Class_id,
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

            await UpdateStudent(req)
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
        // {
        //     name: "Password",
        //     label: "Password",
        //     type: "password",
        //     label_size: 12,
        //     col_size: 6,
        //     disable: false,
        // },
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
            options: allClass.map((classs) => ({
                value: classs._id,
                label: classs.className,
            })),
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

    return (
        <>
            <Content
                Page_title="Edit Student"
                button_status={false}
                backbutton_status={true}
                backForword={true}
            >
                <div className="mt-5">

                    <AddFrom
                        fields={fields.filter(
                            (fields) => !fields.showWhen || fields.showWhen(formik.values)
                        )}
                        btn_name="Edit Student"
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