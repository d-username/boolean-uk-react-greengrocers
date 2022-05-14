import Store from './Store.js'
import Filters from './Filters.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

function Header(props) {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [filterBy, setFilterBy] = useState('all')
  const [sortBy, setSortBy] = useState('')

  let itemsToDisplay = storeItems
  itemsToDisplay = filter(filterBy)
  itemsToDisplay = sort(itemsToDisplay, sortBy)

  function filter(by) {
    if (by === 'all') {
      return storeItems
    } else {
      return storeItems.filter(item => item.type === by)
    }
  }

  function sort(items, by) {
    return items.sort((a, b) => {
      switch (by) {
        case 'abc':
          return a.name > b.name ? 1 : -1

        case 'priceIncreasing':
          return a.price - b.price

        case 'priceDecreasing':
          return b.price - a.price
      }
    })
  }

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <Filters setFilterBy={setFilterBy} setSortBy={setSortBy} />
      <Store
        itemsToDisplay={itemsToDisplay}
        addToCart={props.addToCart}
        setShowInfo={props.setShowInfo}
      />
    </header>
  )
}

export default Header
