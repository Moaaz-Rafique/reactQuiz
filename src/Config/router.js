import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Categories from "../Containers/Categories";
import Question from "../Containers/Question";

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Categories} />
                <Route exact path='/quiz/:ctg' component={Question} />
            </Switch>
        </Router>
    )
}


export default AppRouter;