import StoreItem from './StoreItems'

function Store(props) {
  return (
    <ul className="item-list store--item-list">
      {props.itemsToDisplay.map((item, index) => (
        <StoreItem item={item} key={index} addToCart={props.addToCart} />
      ))}
    </ul>
  )
}

export default Store
