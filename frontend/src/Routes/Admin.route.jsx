import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../ExtraComponent/Header';
import SideBar from '../ExtraComponent/SideBar';
import AdminDashboard from '../Layouts/Admin/Dashboard/Dasboard';
import StudentDashboard from '../Layouts/Admin/Students/AllStudents';
import AddStudent from '../Layouts/Admin/Students/AddStudent';
import EditStudent from '../Layouts/Admin/Students/EditStudent';
import AllTeachers from '../Layouts/Admin/Teachers/AllTeachers';
import AddTeacher from '../Layouts/Admin/Teachers/AddTeacher';
import EditTeacher from '../Layouts/Admin/Teachers/EditTeacher';




const UserRoutes = () => {
    return (
        <div className="admin-container">
            <Header />
            <div className="admin-content">
                <SideBar />
                <main id="main" className="main">
                    <div className="admin-main">
                        <Routes>
                            <Route path="/dashboard" element={<AdminDashboard />} />
                            <Route path="/all-students" element={<StudentDashboard />} />
                            <Route path="/add-students" element={<AddStudent />} />
                            <Route path="/add-students" element={<AddStudent />} />
                            <Route path="/edit-students" element={<EditStudent />} />


                            <Route path="/all-teachers" element={<AllTeachers />} />
                            <Route path="/add-teacher" element={<AddTeacher />} />
                            <Route path="/edit-teacher" element={<EditTeacher />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserRoutes
