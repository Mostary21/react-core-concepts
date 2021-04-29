import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Alamgir', 'Salman', 'Shuvo', 'Bappi']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$65.99'},
    {name: 'Premier Pro', price: '$299.99'},
    { name: 'After Effect', price: '$250.99' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
         {
           products.map(product => <li>{product.name}</li>)
         }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name='Munna' job='Football'></Person>
        <Person name='Masum' job='Audience'></Person>
        <Person name='Abul' job='gatekeeper'></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState([]);
  // const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users (){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
        users.map(user => <li>{user.name}, {' '} {user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
const productStyle={
  border: '1px solid gray',
  borderRadius: '5px',
  bacgroundColor: 'lightgray',
  margin: '6px',
  height: '200px',
  width: '200px',
  float: 'left'
}
const {name, price} = props.product;
return (
  <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy Now</button>
  </div>
)
}
function Person(props){
return (
  <div style={{border:'2px solid aqua', margin:'10px', width:'500px'}}>
    <h3>My Name: {props.name}</h3>
    <p>My Profession: {props.job}</p>
  </div>
)
}
export default App;
