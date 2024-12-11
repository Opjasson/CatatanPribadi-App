import React from "react";
import HeaderTitle from "./HeaderTitle.jsx";
import "../style/navbar.css";
import FormControlled from "./FormControlled.jsx";

function NavbarBody() {
    return (
        <nav className="navbar">
            <HeaderTitle classname="h1">Notes</HeaderTitle>
            <FormControlled />
        </nav>
    );
}

export default NavbarBody;
