import Item from "../Item/Item";

const ItemList = ({items}) => (
      <div className="row">

        {items.map(item => 
            <Item key={item.id} {...item} />
        )}
      </div>
  );


export default ItemList;
