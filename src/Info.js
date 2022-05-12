function Info(props) {
  return (
    <div className={props.showInfo === '' ? 'hidden' : 'infoPanel'}>
      <h1>
        Some information about <span>{props.showInfo.name}</span>
      </h1>
      <img
        src={`/assets/icons/${props.showInfo.id}.svg`}
        alt={props.showInfo.name}
        className="info--icon"
      />
      <p>more text comes here...</p>
      <button onClick={() => props.addToCart(props.showInfo)}>
        Add to cart
      </button>
      <button onClick={() => props.setShowInfo('')}>Back</button>
    </div>
  )
}

export default Info
