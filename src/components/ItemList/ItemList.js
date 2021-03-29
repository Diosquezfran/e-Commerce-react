import Item from "../Item/Item";

const ItemList = ({items}) => (
    <div className="card-columns">
       {items.map(item => 
           <Item key={item.id} {...item} />
       )}
    </div>
  );


export default ItemList;
