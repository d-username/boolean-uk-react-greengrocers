import Store from './Store.js'
import Filters from './Filters.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

function Header(props) {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('')

  const getFruits = array => array.filter(item => item.type === 'fruit')
  const getVegetables = array => array.filter(item => item.type === 'vegetable')
  const sortByAbc = array => array.sort((a, b) => (a.name > b.name ? 1 : -1))
  const sortByPriceIncreasing = array =>
    array.sort((a, b) => (a.price > b.price ? 1 : -1))
  const sortByPriceDecreasing = array =>
    array.sort((a, b) => (a.price > b.price ? -1 : 1))

  let itemsToDisplay = storeItems

  if (filterBy === 'fruit') itemsToDisplay = getFruits(itemsToDisplay)
  if (filterBy === 'vegetable') itemsToDisplay = getVegetables(itemsToDisplay)
  if (filterBy === 'all') itemsToDisplay = storeItems
  if (sortBy === 'abc') itemsToDisplay = sortByAbc(itemsToDisplay)
  if (sortBy === 'priceIncreasing')
    itemsToDisplay = sortByPriceIncreasing(itemsToDisplay)
  if (sortBy === 'priceDecreasing')
    itemsToDisplay = sortByPriceDecreasing(itemsToDisplay)

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <Filters setFilterBy={setFilterBy} setSortBy={setSortBy} />
      <Store itemsToDisplay={itemsToDisplay} addToCart={props.addToCart} />
    </header>
  )
}

export default Header
