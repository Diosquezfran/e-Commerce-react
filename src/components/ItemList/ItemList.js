import Item from "../Item/Item";

const ItemList = ({items}) => (
    <div className="col-12">
       {items.map(item => 
           <Item key={item.id} {...item} />
       )}
    </div>
  );


export default ItemList;
