import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link , useParams} from 'react-router-dom';
import { fetchItems } from './api';
import logo from './assets/logo-grande-D.png'
 
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        console.log("la data de data ", data.data)
         setItems(data.data);
      } catch (error) {
        console.error(error);
      }
       finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);

    if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        {/* Route for Item List */}
        {/* <Route path="/" element={<ItemList items={items} />} /> */}
        <Route path="/" element={<Rebuild   />} />
        <Route path="/test" element={<Home items={items}  />} />
        
        {/* Dynamic Route for Item Details */}
         <Route path="/:id" element={<Travesia items={items} />} />  

       {/* {items.map(item=> {
        <Route path={`/${item.travesia}`} element={<Travesia item={item} />} />
       })}   */}
      </Routes>
    </Router>
  );
};


const Rebuild = () => {
  return <>
     <img src={logo} className="logo" alt="4x4 sin limite logo" />
          <h4>sitio en renovación</h4>
       
  </>
}
const Home = ({items}) => {
  console.log("items de home", items)
  return <>
  <h1>home</h1>
  <div>
     <h1>Item List</h1>
     <ul>
      
        {items.map(item => (
         <li key={item.travesia}>
           <Link to={`/${item.travesia}`}>{item.travesia}</Link>
         </li>
       ))} 
     </ul>
   </div>
</>
}

const Travesia = ({items}) => {
  const { id } = useParams();
  console.log("travesia", items)
  const [item] = items.filter(item => item.travesia === id )
  return <>
  <p>{id}</p>
  <h1>{item.travesia}</h1>
  <h1>{item.fecha}</h1>
  </>
}

 //const ItemList = ({ items }) => (
//   <div>
//     <h1>Item List</h1>
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Link to={`/item/${item.id}`}>{item.name}</Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const ItemDetail = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await fetch(`https://api.example.com/items/${id}`);
//         const data = await response.json();
//         setItem(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchItem();
//   }, [id]);

//   if (!item) return <div>Loading item details...</div>;

//   return (
//     <div>
//       <h1>{item.name}</h1>
//       <p>{item.description}</p>
//     </div>
//   );
// };

export default App;
