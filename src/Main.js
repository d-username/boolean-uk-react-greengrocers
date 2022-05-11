import Cart from './Cart'

function Main(props) {
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
          <span className="total-number">£ {props.cartTotal}</span>
        </div>
      </div>
    </main>
  )
}

export default Main
