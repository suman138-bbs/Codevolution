import { useState } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import Footer from "./Footer";
import './index.css';
import Content from "./Content";
import AddItem from "./AddItem";
import React from "react";
const App = () => {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('shopingList')))
  const [ search,setSearch]=useState('')
  const [newItem, setNewItem] = useState('')
  const setAndSaveItems = (newItem) => {
    setItems(newItem)
    localStorage.setItem('shopingList',JSON.stringify(newItem))
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewItem = { id, checked: false, item };
    const listItems = [...items, mynewItem];
     setAndSaveItems(listItems)
    
 }
  const handleCheck = (id) => {
    const listItems = items.map((item) => 
      item.id === id ? { ...item, checked: !item.checked } : item)
      setAndSaveItems(listItems)
    }
  /////////////////////////////////////////////////////////

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
     setAndSaveItems(listItems)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(newItem)
    setNewItem('')
}
  
  return (
    <div className="App">
   
      <Header title='Groceries List' />
      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      
      />
      <SearchItem search={search } setSearch={setSearch } />
      <Content items={items.filter((item) =>  ( (item.item).toLowerCase()).includes(search.toLowerCase()))}  handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={ items.length} />
    </div>
  )
}

export default App;