import React from "react";
import "./Button.scss";


function Button(props) {
    return(
        <div>
            <button type="submit">{props.name}</button>
        </div>
    )
}

export default Button;