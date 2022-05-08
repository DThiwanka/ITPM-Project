import React from "react";
//import CSS file
import '../../CSS/message.css'

const SuccessMessage = ({ variant, children }) => {
    return (
        <div className="alertSuccessContainer" variant={variant}>
            {children}
        </div>
    )
}

export default SuccessMessage;
