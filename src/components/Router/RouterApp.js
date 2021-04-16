import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import Checkout from "../Form/Checkout";

const RouterApp = () =>{
    return(
        <Router>
            <div>
                <NavBar />
                <Switch>
                <Route path="/Category/:id"><ItemListContainer greeting='Bienvenido a Shop Online'/></Route>
                <Route path="/Item/:id"><ItemDetailContainer/></Route>
                <Route path="/Cart"><Cart/></Route>
                <Route path="/checkout"><Checkout/></Route>
                <Route exact path="/"><ItemListContainer greeting='Bienvenido a Shop Online'/></Route>
                </Switch>
            </div>
        </Router>

    )
}

export default RouterApp;