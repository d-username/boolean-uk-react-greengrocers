import Store from './Store.js'

function Header(props) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <Store addToCart={props.addToCart} />
    </header>
  )
}

export default Header
