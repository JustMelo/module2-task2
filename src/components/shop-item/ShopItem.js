import { CurrencySymbols, ButtonsText } from "../../const"

export default function ShopItem (props) {
  
  const {name, price, color, img} = props.data

  return (
    <div className="item-line">
      <img src={img} alt={name} className="img-small"/>
      <div className="line-name">{name.toUpperCase()}</div>
      <div className="line-color">{color}</div>
      <div className="line-price">{CurrencySymbols.DOLLAR + price}</div>
      <button className="line-button">{ButtonsText.ADD_TO_CART}</button>
    </div>
  )
}