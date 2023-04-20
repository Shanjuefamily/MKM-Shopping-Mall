import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

function FrontendLayout() {
    return (
        <>
            <Navbar />
            <div class="container mx-auto mt-1">
                <Content />
            </div>
        </>
    );
}

export default FrontendLayout;
