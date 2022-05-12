import Store from './Store.js'
import Filters from './Filters.js'

import initialStoreItems from './store-items'
import { useState } from 'react'

function Header(props) {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [filterBy, setFilterBy] = useState('')
  const [sortBy, setSortBy] = useState('')
  console.log('sort by what? ', sortBy)

  const getFruits = array => array.filter(item => item.type === 'fruit')
  const getVegetables = array => array.filter(item => item.type === 'vegetable')

  const sortByAbc = array => {
    console.log('ARRAY: ', array)
    let itemNames = []
    array.forEach(item => {
      itemNames.push(item.name)
    })
    console.log('ITEM NAME ONLY: ', itemNames)
    const sortedNames = itemNames.sort()
    console.log('SORTED ITEM NAMES: ', sortedNames)

    sortedNames.forEach(name => {
      array.forEach(item)
    })

    //this needs to return an array of items i want to deispay.
    return array
  }

  //??? shall i keep it as a standalone variable or use statehook for this too??? i have seen it this was in one of the previous excercises completed.
  let itemsToDisplay = storeItems
  console.log('STORE ITEMS: ', storeItems)

  if (filterBy === 'fruit') itemsToDisplay = getFruits(itemsToDisplay)
  if (filterBy === 'vegetable') itemsToDisplay = getVegetables(itemsToDisplay)
  if (filterBy === 'all') itemsToDisplay = storeItems

  if (sortBy === 'abc') itemsToDisplay = sortByAbc(itemsToDisplay)

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <Filters setFilterBy={setFilterBy} setSortBy={setSortBy} />
      <Store itemsToDisplay={itemsToDisplay} addToCart={props.addToCart} />
    </header>
  )
}

export default Header
