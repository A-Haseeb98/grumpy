import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../page";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Home}/>
            </Switch>
        </Router>

    );
}

export default AppRouter;