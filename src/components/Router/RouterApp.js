import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import Checkout from "../Form/Checkout";
import BuyEnd from "../Form/BuyEnd";
import Footer from "../Footer";

const RouterApp = () =>{
    return(
        <Router>
            <div>
                <NavBar/>
                <Switch>
                <Route path="/Category/:id"><ItemListContainer greeting='Essential Lux'/></Route>
                <Route path="/Item/:id"><ItemDetailContainer/></Route>
                <Route path="/Cart"><Cart/></Route>
                <Route path="/checkout"><Checkout/></Route>
                <Route path="/thanks"><BuyEnd/></Route>
                <Route exact path="/"><ItemListContainer greeting='Welcome to Lux'/></Route>
                </Switch>
                <Footer/>
            </div>
        </Router>

    )
}

export default RouterApp;