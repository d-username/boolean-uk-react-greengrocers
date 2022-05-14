import Cart from './Cart'

function Main(props) {
  const calculateTotal = () => {
    const pricePerCartItem = props.cart.map(
      cartItem => cartItem.item.price * cartItem.quantityInCart
    )
    let total = 0
    pricePerCartItem.forEach(price => {
      total += price
    })
    return parseFloat(total).toFixed(2)
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <Cart
          cart={props.cart}
          increaseQuantity={props.increaseQuantity}
          decreaseQuantity={props.decreaseQuantity}
        />
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£ {calculateTotal()}</span>
        </div>
      </div>
    </main>
  )
}

export default Main
