import React from 'react'
import { Switch, Route } from "react-router-dom";
import { PageHome, PageExamples } from "./pages";
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <PageHome />
            </Route>
            <Route path="/examples">
                <PageExamples />
            </Route>
        </Switch>
    )
}

export default Routes
