import ItemList from "./ItemList"


const ItemListContainer = (props) => (
    <div class="lista">
        <h3>{props.greeting}</h3>
        <ItemList items={props.items}/>
    </div>
);


export default ItemListContainer;