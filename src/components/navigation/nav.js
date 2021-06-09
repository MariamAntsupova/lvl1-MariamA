import React from "react";
import Button from "../button/Button";
import "./nav.scss";
function Nav() {
    return(
        <div>
            <nav>
                <h2>admin</h2>
                <Button name="Logout"/>
            </nav>
        </div>
    )
}

export default Nav;