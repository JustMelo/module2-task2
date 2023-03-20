import { CurrencySymbols, ButtonsText } from "../../const"

export default function ShopCard (props) {

  const {name, price, color, img} = props.data

  return (
    <div className="item-card">
      <h3 className="card-name">{name.toUpperCase()}</h3>
      <p className="card-color">{color}</p>
      <img src={img} alt={name} className="img-normal"/>
      <p className="card-price">{CurrencySymbols.DOLLAR + price}
        <button className="card-button">{ButtonsText.ADD_TO_CART}</button>
      </p>
    </div>
  )
}