function CartItems(props) {
  return (
    <li>
      <img
        class="cart--item-icon"
        src={`/assets/icons/${props.cartItem.item.id}.svg`}
        alt={props.cartItem.item.name}
      />
      <p>{props.cartItem.item.name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={() => props.decreaseQuantity(props.cartItem)}
      >
        -
      </button>
      <span class="quantity-text center">{props.cartItem.quantityInCart}</span>
      <button
        class="quantity-btn add-btn center"
        onClick={() => props.increaseQuantity(props.cartItem)}
      >
        +
      </button>
    </li>
  )
}

export default CartItems
