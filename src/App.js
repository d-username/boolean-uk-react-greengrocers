import './styles/reset.css'
import './styles/index.css'

import Header from './Header'
import Main from './Main'
import Icons from './Icons'

import { useState } from 'react'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const addToCart = item => {
    if (!isItemInCart(item)) {
      setCart([...cart, createCartItem(item)])
      let newTotal = Number((cartTotal + item.price).toFixed(2))
      setCartTotal(newTotal)
    }
  }

  function isItemInCart(item) {
    let itemIsInCart = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item.id === item.id) {
        itemIsInCart = true
      }
    }
    return itemIsInCart
  }

  const createCartItem = item => {
    let cartItem = {
      item: item,
      quantityInCart: 1
    }
    return cartItem
  }

  const increaseQuantity = target => {
    let updatedCart = cart.map(cartItem => {
      if (cartItem === target) {
        cartItem.quantityInCart++
      }
      return cartItem
    })
    setCart(updatedCart)
    let newTotal = Number((cartTotal + target.item.price).toFixed(2))
    setCartTotal(newTotal)
  }

  const decreaseQuantity = target => {
    if (target.quantityInCart > 1) {
      let updatedCart = cart.map(cartItem => {
        if (cartItem.item.id === target.item.id) {
          cartItem.quantityInCart--
        }
        return cartItem
      })
      setCart(updatedCart)
      let newTotal = Number((cartTotal - target.item.price).toFixed(2))
      setCartTotal(newTotal)
    } else if (target.quantityInCart === 1) {
      removeFromCart(target)
    }
  }

  const removeFromCart = target => {
    const updatedCart = cart.filter(cartItem => {
      if (cartItem.item.id !== target.item.id) {
        return cartItem
      }
    })
    setCart(updatedCart)
    let newTotal = Number((cartTotal - target.item.price).toFixed(2))
    setCartTotal(newTotal)
  }

  return (
    <>
      <Header addToCart={addToCart} />
      <Main
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cartTotal={cartTotal}
      />
      <Icons />
    </>
  )
}
