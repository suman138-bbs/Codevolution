import React from 'react'
import LineItem from './LineItem'
const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
      <main>
          <ul>
          {items.map((item) => {
            return <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
          })}
        </ul>
    </main>
  )
}

export default ItemList