import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useFormik } from "formik";
import * as Yup from "yup";
import AddFrom from "../../../Components/ReusableFrom";
import Content from "../../../ExtraComponent/Content/Contents";
import { AddTeachersdata } from "../../../Services/admin/Teachers";
import Swal from "sweetalert2";
import { getAllSubject } from "../../../Services/admin/Student";
import { Navigate, useNavigate } from "react-router-dom";


const AddTeacher = () => {

    const [allsubject, setAllSubject] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getSubject();

    }, []);


    const formik = useFormik({
        initialValues: {
            FullName: "",
            Email: "",
            PhoneNo: "",
            Password: "",
            Gender: "",
            Address: "",
            Subject: "",
            Role: ""

        },
        validate: (values) => {
            const errors = {};
            if (!values.FullName) {
                errors.FullName = "FullName is Required";
            }
            if (!values.Email) {
                errors.Email = " Email is Required";
            }
            if (!values.PhoneNo) {
                errors.PhoneNo = "PhoneNo is Required";
            }
            if (!values.Subject) {
                errors.Subject = "Subject is Required";
            }
            if (!values.Password) {

                errors.Password = " Password is Required";
            }

            if (!values.Gender) {
                errors.Gender = "Gender is Required";
            }
            if (!values.Address) {
                errors.Address = "Required";
            }

            return errors;
        },

        onSubmit: async (values) => {
            const req = {
                FullName: values.FullName,
                Email: values.Email,
                PhoneNo: values.PhoneNo,
                Password: values.Password,
                Gender: values.Gender,
                Address: values.Address,
                Subject: values.Subject,
                Role: "1",

            };

            await AddTeachersdata(req)
                .then((res) => {
                    if (res.status) {
                        Swal.fire({
                            icon: "success",
                            title: "Teacher Added Successfully",
                        }), then(() => {
                            navigate("/admin/all-teachers")
                        })

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
            label: "FullName",
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
            name: "PhoneNo",
            label: "Phone Number",
            type: "number",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "Subject",
            label: "Subject",
            type: "select",
            options: allsubject.map((subject) => ({
                value: subject._id,
                label: subject.Subject_Name,
            })),
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
            name: "Address",
            label: "Address",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        }


    ];


    const getSubject = async () => {
        const res = await getAllSubject()
            .then((res) => {
                if (res.status) {
                    setAllSubject(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (
        <>
            <Content
                Page_title="Add Teacher"
                button_status={false}
                backbutton_status={true}
                backForword={true}
            >
                <div className="mt-5">

                    <AddFrom
                        fields={fields.filter(
                            (fields) => !fields.showWhen || fields.showWhen(formik.values)
                        )}
                        btn_name="Add Teacher"
                        hide_cancle_btn={false}
                        hide_submit_btn={false}
                        formik={formik}

                    />

                </div>
            </Content>


        </>
    );
}

export default AddTeacher;