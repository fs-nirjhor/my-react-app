import React, {useState,useEffect} from 'react';
var myName = 'FS NIRJHOR';
var myStyle = {
       color: 'blue',
       backgroundColor: 'lime',
       textAlign : 'center'
     };
var study = {
       year: '1st year',
       subject: 'Botany'
     };
function App() {
  const countryList = ['USA', 'UK', 'Russia', 'Japan','China'];
  const capitalList = ['New-York','London','Moscow','Tokio', 'Beijing'];
  const countries = countryList.map(country => <li>{country}</li>);
  const productList = [
    {name:'Phone', price:'15000'},
    {name:'TV', price:'25000'},
    {name:'Freez', price:'40000'},
    {name:'AC', price:'60000'},
    {name:'Cooker', price:'2000'}
    ]
  return (
    <div className="App" style={{textAlign: 'center', userSelect:'none'}}>
      <code style={{backgroundColor:'red', color:'yellow'}}>Practicing React {700+86}!</code>
      <h2 style={myStyle}>Hello REACT</h2>
      <h3>Its {myName}</h3>
     <h4>Study: {study.subject + ' ' + study.year}</h4>
         <Address></Address>     
         <Address capital='Dhaka' country='Bangladesh'></Address>
         <Address capital={countryList[0]} country={capitalList[0]}></Address>
         <Products product={productList[0]}></Products>
         <Products product={productList[1]}></Products>
         <Products product={productList[2]}></Products>
         {
           productList.map(pd => <Products product={pd}></Products>)
         }
              <ul >{countries}</ul>
              <Counter></Counter>
              <Users></Users>
    </div>
  );
}
/* each functions are called components. props = properties */

  function Address(props) {
    const addressStyle = {
      border: '2px solid lime', 
      margin: '5px',
      backgroundColor: 'tomato'
     };
    return (
      <div style={addressStyle}>
      <p><strong>Capital: </strong>{props.capital}</p>
      <p><strong>Country: </strong>{props.country}</p>
      </div>
      );
  }
  function Products(props) {
   const productStyle = {
     backgroundColor: 'lightgreen',
     margin: '1%',
     width: '23%',
     float: 'left'
   }
   const {name,price} = props.product;
    return (
      <div style={productStyle}>
      <h2 >{name}</h2>
      <h3>{price} tk</h3>
      <button >Buy Now</button>
      </div>
      )
  }
  function Counter() {
const [count, setCount] = useState(10);
  return (
    <div style={{backgroundColor:'lightblue', margin:'20px'}}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button> &nbsp;
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
    )
}
 function Users() {
 const [users, setUsers] = useState([]);
 useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/users`)
   .then(res => res.json())
   .then(data => setUsers(data))
 },[])
   return (
    <div>
      <h1>Total User: {users.length}</h1>
<ol>
      {
   users.map(user => <li style={{margin:'20px',lineHeight:'2',backgroundColor:'orange'}}>Name : {user.name} <br/> Phone : {user.phone} <br/>Email : {user.email} </li>) 
      }
</ol>
    </div>
    )
 }
export default App;
