import React from "react";
import Navbar from "./Navbar";
// import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import Male from "./Male";
import Female from "./Female";

const users = [
    { id: 1, name: "Alice", gender: "f" },
    { id: 2, name: "Bob", gender: "m" },
    { id: 3, name: "Tom", gender: "m" },
    { id: 4, name: "Mary", gender: "f" },
];

function FrontendLayout() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-1">
                <Routes>
                    <Route
                        path="/male"
                        element={<Male items={users} />}
                    ></Route>
                    <Route
                        path="/female"
                        element={<Female items={users} />}
                    ></Route>
                </Routes>
            </div>
        </>
    );
}

export default FrontendLayout;
