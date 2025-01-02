// Container.js
import React from "react";
import "../style/container.css"
const Container = ({ children }) => {
    return (
        <div className="kotakUtama">
            {children}
        </div>
    )
};

export default Container;
