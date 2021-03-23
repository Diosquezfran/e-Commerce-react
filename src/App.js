import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useEffect, useState } from 'react';

function App() {
  const [items , setItems] = useState( [] );

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien([{
          id : 1,
          title : 'jean',
          price : 5000,
          imgpictureUrl: "https://jc-moda.com/wp-content/uploads/2019/10/bermuda-atr.jpg"
        }]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  })

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenido' items={items}/>
    </div>
  );
}
export default App;
