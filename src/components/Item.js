const Item = (props) => (
    <>
    <li><img class="imagen" src={props.imgpictureUrl}/></li>
    <li>{props.title}</li>
    <li>{props.price}</li>
    </>
);
export default Item;

