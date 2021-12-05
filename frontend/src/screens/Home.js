import React from "react";
import { Navigate } from "react-router-dom";
import ExpertHome from "../components/ExpertHome";
import UserHome from "../components/UserHome";

const Home = () => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="Container">
            <UserHome />
            <ExpertHome />
            <h1 className="color">hello world</h1>
        </div>
    );
};

export default Home;
