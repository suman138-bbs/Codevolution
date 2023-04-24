import React from 'react'
import ItemList from './ItemList'
const Content = ({items,handleCheck,handleDelete}) => {
  return (
    <>
     <demo/>
    <main>
     
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      ) : <p style={{ marginTop: "2rem" }}>Your List is Empty</p>}
    </main>
      </>
  )
}

export default Content