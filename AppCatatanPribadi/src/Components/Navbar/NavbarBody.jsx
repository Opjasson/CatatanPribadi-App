import React from "react";
import HeaderTitle from "../HeaderTitle";
import "../../style/navbar.css";
import FormControlled from "../ControlledComponent/FormControlled";

function NavbarBody({ classname }) {
    return (
        <nav className="navbar">
            <HeaderTitle classname="h1">Notes</HeaderTitle>
            <FormControlled />
        </nav>
    );
}

export default NavbarBody;
