function StoreItem(props) {
  return (
    <li>
      <h3>{props.item.name}</h3>
      <div className="store--item-icon">
        <img src={`/assets/icons/${props.item.id}.svg`} alt={props.item.name} />
      </div>
      <p>{props.item.price}</p>
      <div className="store--buttons-add-info">
        <button onClick={() => props.addToCart(props.item)}>Add to cart</button>
        <button onClick={() => props.setShowInfo(props.item)}>Info</button>
      </div>
    </li>
  )
}

export default StoreItem
