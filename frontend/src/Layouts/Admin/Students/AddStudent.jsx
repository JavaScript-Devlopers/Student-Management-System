import React, { useState, useEffect } from "react";
import Datatable from '../../../Components/ReusableTable'
import { useFormik } from "formik";
import * as Yup from "yup";
import AddFrom from "../../../Components/ReusableFrom";
import Content from "../../../ExtraComponent/Content/Contents";

const Dashboard = () => {

    const [students, setStudents] = useState([]);
    const [allStudents, setAllStudents] = useState([]);
    const [dashboardData, setDashboardData] = useState({});


   
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
            ParentId: "",
            Role: "",
            Alternate_PhoneNo: "",
            FatherName: "",
            Mother_Name: "",
            PhoneNo: "",
            section: "",
            District: "",
            State: "",
            
        },
        validationSchema: Yup.object({
            FullName: Yup.string().required("Required"),
            Email: Yup.string().required("Required"),
            Student_PhoneNo: Yup.string().required("Required"),
            Password: Yup.string().required("Required"),
            Enrolment_Number: Yup.string().required("Required"),
            Class_id: Yup.string().required("Required"),
            Gender: Yup.string().required("Required"),
            DOB: Yup.string().required("Required"),
            Address: Yup.string().required("Required"),
            subject: Yup.string().required("Required"),
            ParentId: Yup.string().required("Required"),
            Role: Yup.string().required("Required"),
            Alternate_PhoneNo: Yup.string().required("Required"),
            FatherName: Yup.string().required("Required"),
            Mother_Name: Yup.string().required("Required"),
            PhoneNo: Yup.string().required("Required"),
            section: Yup.string().required("Required"),
            District: Yup.string().required("Required"),
            State: Yup.string().required("Required"),
          
        }),

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
            name : "Class_id",
            label : "Class",
            type : "select",
            options : [
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
            name : "section",
            label : "Section",
            type : "select",
            options : [
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
            col_size: 12,
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
            options: [
                { value: "Geography", label: "Geography" },
                { value: "History", label: "History" },
                { value: "Physics", label: "Physics" },
                { value: "Chemistry", label: "Chemistry" },
                { value: "Biology", label: "Biology" },
                { value: "Mathematics", label: "Mathematics" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name : "FatherName",
            label : "Father Name",
            type : "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        
        },
        {
            name : "Mother_Name",
            label : "Mother Name",
            type : "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name : "PhoneNo",
            label : "Father Phone number",
            type : "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name : "AlternatePhoneNo",
            label : "Alternate Phone number",
            type : "text",
            label_size: 12,
            col_size: 6,
            disable: false,

        },
         
       
    ];



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
                        page_title="Add Employee"
                        hide_cancle_btn={true}
                        hide_submit_btn={true}
                        formik={formik}

                    />

                </div>
            </Content>


        </>
    );
}

export default Dashboard;