function StoreItem(props) {
  return (
    <li>
      <h3>{props.item.name}</h3>
      <div className="store--item-icon">
        <img src={`/assets/icons/${props.item.id}.svg`} alt={props.item.name} />
      </div>
      <p>{props.item.price}</p>
      <button onClick={() => props.addToCart(props.item)}>Add to cart</button>
    </li>
  )
}

export default StoreItem
