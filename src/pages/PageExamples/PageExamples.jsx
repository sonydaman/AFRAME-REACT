import React, { useState } from 'react'
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import ExampleRoutes from './ExampleRoutes'
const PageExamples = () => {
    const [activeState, setActiveState] = useState({ example1: 'active', example2: '' })
    const handelActive = (input) => {
        const allKeys = { example1: '', example2: '' };
        setActiveState(() => ({ ...allKeys, [input]: 'active' }));
    }
    let { url } = useRouteMatch();
    const { location: { pathname }, ...history } = useHistory();
    const defaultRoute = () => {
        if (pathname === '/examples') {
            history.push('/examples/example1')
        }
    }
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link onClick={() => handelActive('example1')} className={`nav-link ${activeState.example1}`} to={`${url}/example1`}>Example 1</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={() => handelActive('example2')} className={`nav-link ${activeState.example2}`} to={`${url}/example2`}>Example 2</Link>
                </li>
            </ul>
            <ExampleRoutes />
            {defaultRoute()}
        </div>
    )
}


export { PageExamples }
