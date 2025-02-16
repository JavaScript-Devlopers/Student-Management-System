import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../ExtraComponent/Header';
import SideBar from '../ExtraComponent/SideBar';
import AdminDashboard from '../Layouts/Admin/Dashboard/Dasboard';
import StudentDashboard from '../Layouts/Admin/Students/AllStudents';
import AddStudent from '../Layouts/Admin/Students/AddStudent';




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
                            <Route path="/add-students" element={<AddStudent/>} />



                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserRoutes
