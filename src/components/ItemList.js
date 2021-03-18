import Item from "./Item";

const ItemList = (props) => (
    <>
      <h1>Lista</h1>
      <ul>
       {props.items.map((x) => (
           <Item key={x.id} price={x.price} title={x.title} imgpictureUrl={x.imgpictureUrl} />
       ))}
      </ul>
    </>
  );


export default ItemList;
