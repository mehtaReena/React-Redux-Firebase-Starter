import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";

import Home from './Home.jsx';

import CompanyDetails from "./CompanyDetails.jsx";

export default function Main() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/companyDetails/:name" component={CompanyDetails}/>

                <Route path="/404">
                    <h2> Page not found</h2>
                </Route>
            </Switch>



        </Router>
    )
}