import React from 'react'
import itemList from './itemList'
import demo from './demo'
const Content = ({items,handleCheck,handleDelete}) => {
  return (
    <>
     <demo/>
    <main>
     
      {items.length ? (
        <itemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
      ) : <p style={{ marginTop: "2rem" }}>Your List is Empty</p>}
    </main>
      </>
  )
}

export default Content