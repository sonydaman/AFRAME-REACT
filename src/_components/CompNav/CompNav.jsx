import React, { useState } from 'react'
import { Link } from "react-router-dom";
const CompNav = props => {
    const [activeState, setActiveState] = useState({ home: 'active', example: '' })
    const handelActive = (input) => {
        const allKeys = { home: '', example: '' };
        setActiveState(() => ({ ...allKeys, [input]: 'active' }));
    }
    return (
        <div>
            <ul className="nav  nav-tabs justify-content-center">
                <li className="nav-item">
                    <Link onClick={() => handelActive('home')} className={`nav-link ${activeState.home}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handelActive('example')} className={`nav-link ${activeState.example}`} to="/examples">Example</Link>
                </li>
            </ul>
            {props.children}
        </div>
    )
}


export { CompNav }
