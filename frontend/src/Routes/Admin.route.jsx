import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import AdminDashboard from '../Layouts/Admin/Dashboard/Dashboard';
import AllQuize from '../Layouts/Admin/Quizes/AllQuize';




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
                            <Route path="/all-quizes" element={<AllQuize />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserRoutes
