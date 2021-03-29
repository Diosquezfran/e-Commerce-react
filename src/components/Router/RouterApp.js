import { BrowserRouter as Router, Link, Route, Switch, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const RouterApp = () =>{
    return(
        <Router>
            <div>
                <NavBar />
                <Switch>
                <Route path="/Category/:id"><ItemListContainer greeting='Bienvenido'/></Route>
                <Route path="/Item/:id"><ItemDetailContainer/></Route>
                <Route exact path="/"><ItemListContainer greeting='Bienvenido'/></Route>
                </Switch>
            </div>
        </Router>

    )
}

export default RouterApp;