import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContextComponent/ThemeContextComponent';
import './ToggleTheme.css';
const ToggleTheme = ({ label }) => {
    const { handleTheme } = useContext(ThemeContext);
    return (
        <div className="container">
            <div className="toggle-switch">
                <input onClick={handleTheme} type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleTheme;