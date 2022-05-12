function Filters(props) {
  return (
    <form class="form">
      <h4 class="center">
        <b>FILTER by:</b>
      </h4>
      <div class="filterContainer">
        <div class="radioFruit">
          <input
            type="radio"
            id="fruit"
            name="type"
            value="fruit"
            onChange={e => props.setFilterBy(e.target.value)}
          />
          <label for="fruit">Fruit</label>
        </div>
        <div class="radioVegetable">
          <input
            type="radio"
            id="vegetable"
            name="type"
            value="vegetable"
            onChange={e => props.setFilterBy(e.target.value)}
          />
          <label for="vegetable">Vegetable</label>
        </div>
        <div class="radioAll">
          <input
            type="radio"
            id="all"
            name="type"
            value="all"
            onChange={e => props.setFilterBy(e.target.value)}
          />
          <label for="all">All</label>
        </div>
      </div>

      <h4 class="center">
        <b>SORT by:</b>
      </h4>
      <div class="sortContainer">
        <div class="radioABC">
          <input
            type="radio"
            id="abc"
            name="sort"
            value="abc"
            onChange={e => props.setSortBy(e.target.value)}
          />
          <label for="abc">ABC</label>
        </div>
        <div class="radioPriceIncreasing">
          <input
            type="radio"
            id="priceIncreasing"
            name="sort"
            value="priceIncreasing"
            onChange={e => props.setSortBy(e.target.value)}
          />
          <label for="priceIncreasing">Price - Increasing</label>
        </div>
        <div class="radioPriceDecreasing">
          <input
            type="radio"
            id="priceDecreasing"
            name="sort"
            value="priceDecreasing"
            onChange={e => props.setSortBy(e.target.value)}
          />
          <label for="priceDecreasing">Price - Decreasing</label>
        </div>
      </div>
    </form>
  )
}

export default Filters
