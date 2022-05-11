import StoreItem from './StoreItems'
import initialStoreItems from './store-items'
import { useState } from 'react'

function Store(props) {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  return (
    <ul className="item-list store--item-list">
      {storeItems.map((item, index) => (
        <StoreItem item={item} key={index} addToCart={props.addToCart} />
      ))}
    </ul>
  )
}

export default Store
