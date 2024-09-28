import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0];

     const checkButtonSize = SIZES.includes(buttonSize) 
     ? buttonSize 
     : SIZES[0];

    return (
        <Link to="https://www.airbnb.com/rooms/48921548?adults=1&children=0&enable_m3_private_room=true&infants=0&location=Charleston%2C%20SC&pets=0&search_mode=regular_search&check_in=2024-09-15&check_out=2024-09-20&source_impression_id=p3_1725916216_P3jQ9qqJTBPgr5wy&previous_page_section_name=1001&federated_search_id=6e3e5a36-80f7-4c44-a541-3a4362f1b6cb" 
        className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};