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
            question: "",
            questionType: "",
            subject: "",
            chapter: "",
            difficulty: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correctOption: "",
            explanation: "",

        },
        validationSchema: Yup.object({
            question: Yup.string().required("Please enter question"),
            questionType: Yup.string().required("Please select question type"),
            subject: Yup.string().required("Please select subject"),
            difficulty: Yup.string().required("Please enter difficulty"),
            option1: Yup.string().required("Please enter option 1"),
            option2: Yup.string().required("Please enter option 2"),
            option3: Yup.string().required("Please enter option 3"),
            option4: Yup.string().required("Please enter option 4"),
            correctOption: Yup.string().required("Please select correct option"),
            explanation: Yup.string().required("Please enter explanation"),


        }),

    });

    const fields = [
        { 
            name: "StudentName",
            label: "Student Name",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "questionType",
            label: "Question Type",
            type: "select",
            options: [
                { value: 1, label: "MCQ" },
                { value: 2, label: "True/False" },
                { value: 3, label: "MSQ" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "subject",
            label: "Subject",
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
            name: "chapter",
            label: "Chapter",
            type: "select",
            options: [
                { value: "Chapter 1", label: "Chapter 1" },
                { value: "Chapter 2", label: "Chapter 2" },
                { value: "Chapter 3", label: "Chapter 3" },
                { value: "Chapter 4", label: "Chapter 4" },
                { value: "Chapter 5", label: "Chapter 5" },
                { value: "Chapter 6", label: "Chapter 6" },
                { value: "Chapter 7", label: "Chapter 7" },
                { value: "Chapter 8", label: "Chapter 8" },
                { value: "Chapter 9", label: "Chapter 9" },
                { value: "Chapter 10", label: "Chapter 10" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "difficulty",
            label: "Difficulty",
            type: "select",
            options: [
                { value: "easy", label: "Easy" },
                { value: "medium", label: "Medium" },
                { value: "hard", label: "Hard" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option1",
            label: "Option 1",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option2",
            label: "Option 2",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option3",
            label: "Option 3",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "option4",
            label: "Option 4",
            type: "text",
            label_size: 12,
            col_size: 6,
            disable: false,

        },
        {
            name: "correctOption",
            label: "Correct Option",
            type: "select",
            options: [
                { value: "Option 1", label: "Option 1" },
                { value: "Option 2", label: "Option 2" },
                { value: "Option 3", label: "Option 3" },
                { value: "Option 4", label: "Option 4" },
            ],
            label_size: 12,
            col_size: 6,
            disable: false,
        },
        {
            name: "explanation",
            label: "Explanation",
            type: "textarea",
            label_size: 12,
            col_size: 12,
            disable: false,
        }

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