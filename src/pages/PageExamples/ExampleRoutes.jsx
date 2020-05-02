import React from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Example1, Example2 } from "../../_components";
const ExampleRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/example1`}>
                <Example1 />
            </Route>
            <Route path={`${path}/example2`}>
                <Example2 />
            </Route>
        </Switch>
    )
}

export default ExampleRoutes
