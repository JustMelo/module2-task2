import ShopCard from "../shop-card/ShopCard";

export default function CardsView (props) {

  const productsData = props.cards;

  const productsCards = [];

    productsData.forEach((elem, index) => {
      productsCards.push (
        <ShopCard data={elem} key={index}/>
      )
    });

  return (
    <div className="cards-tablet">
      {productsCards}
    </div>
  )
}