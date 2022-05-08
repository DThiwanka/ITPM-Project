import React from "react";
//import CSS file
import '../../CSS/message.css'

const Message = ({ variant, children }) => {
    return (
        <div className="alertContainer" variant={variant}>
            {children}
        </div>
    )
}

export default Message;
