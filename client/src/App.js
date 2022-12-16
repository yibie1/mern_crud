
import './App.css';
import React, {useState} from "react";
import Axios from 'axios';

function App() {

  const [bookName , setBookName] = useState(""); 
  const [price, setPrice] = useState();
  const[author, setAuthor] = useState("");
  const addbook = ()=>{
    Axios.post("http://localhost:3000", 
    {bookName: bookName, price:price, author:author});
  }
  return (
    <div className="App">
      <h2>MERN_CRUD</h2>
      <label>Book Name</label>
      <input type="text" onChange = {(event) => {
        setBookName(event.target.value);
      }}/>
      <label>Book Price</label>
      <input type="number" onChange = {(event) => {
        setPrice(event.target.value);
      }}
      />
      <label>Book author</label>
      <input type="text" onChange = {(event)=>{
        setAuthor(event.target.value)
      }} />
      <button onClick={addbook}>Add Book</button>
    </div>
  );
}

export default App;
