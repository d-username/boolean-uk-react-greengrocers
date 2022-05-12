import './styles/reset.css'
import './styles/index.css'

import Header from './Header'
import Main from './Main'
import Icons from './Icons'
import Info from './Info'

import { useState } from 'react'

export default function App() {
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [showInfo, setShowInfo] = useState('')

  const addToCart = item => {
    if (!isItemInCart(item)) {
      setCart([...cart, createCartItem(item)])
      setCartTotal(cartTotal + item.price)
    }
  }

  const isItemInCart = item => {
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
    setCartTotal(cartTotal + target.item.price)
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
      setCartTotal(cartTotal - target.item.price)
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
    setCartTotal(cartTotal - target.item.price)
  }

  return (
    <>
      <Header addToCart={addToCart} setShowInfo={setShowInfo} />
      <Info
        showInfo={showInfo}
        setShowInfo={setShowInfo}
        addToCart={addToCart}
      />
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
