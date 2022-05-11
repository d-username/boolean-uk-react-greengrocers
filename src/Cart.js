import CartItems from './CartItems'

function Cart(props) {
  return (
    <ul className="item-list cart--item-list">
      {props.cart.map((cartItem, index) => (
        <CartItems
          cartItem={cartItem}
          key={index}
          increaseQuantity={props.increaseQuantity}
          decreaseQuantity={props.decreaseQuantity}
        />
      ))}
    </ul>
  )
}

export default Cart
