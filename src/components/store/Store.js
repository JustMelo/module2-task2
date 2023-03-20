import { useState } from "react"
import CardsView from "../cards-view/CardsView";
import ListView from "../list-view/ListView";
import IconSwitch from "../icon-switch/IconSwitch";
import { ViewTypes } from "../../const"

export default function Store (props) {

  const productsData = props.products;

  const [viewTypeState, setViewTypeState] = useState(ViewTypes.CARD);

  const changeViewTypeHandler = (evt) => {
    if (evt.target.dataset.type === ViewTypes.CARD) {
      setViewTypeState(ViewTypes.LIST) 
      return
    }
    
    setViewTypeState(ViewTypes.CARD)
  }
 
    return (
    <>
      <div>
        <IconSwitch icon={viewTypeState} onSwitch={() => changeViewTypeHandler}/>
      </div>
      <div>
        {viewTypeState === ViewTypes.CARD? <CardsView cards={productsData}/> : <ListView products={productsData}/>}
      </div>
    </>
    )
};