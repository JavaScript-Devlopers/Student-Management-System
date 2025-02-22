import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../ExtraComponent/Header';
import SideBar from '../ExtraComponent/SideBar';
import StudentDashboard from '../Layouts/Admin/Students/AllStudents';




const UserRoutes = () => {
    return ( 
        <div className="admin-container">
            <Header />
            <div className="admin-content">
                <SideBar />
                <main id="main" className="main">
                    <div className="admin-main">
                        <Routes>
                            <Route path="/all-students" element={<StudentDashboard />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserRoutes
