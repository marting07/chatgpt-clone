import React from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";

const Dashboard = () => {
    return <div className="dashboard_container">
        <Sidebar />
        <Chat />
    </div>;
};

export default Dashboard;
