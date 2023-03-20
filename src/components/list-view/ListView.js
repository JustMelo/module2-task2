import ShopItem from "../shop-item/ShopItem";

export default function ListView (props) {

  const productsData = props.products;

  const productsRows = [];

    productsData.forEach((elem, index) => {
      productsRows.push (
        <ShopItem data={elem} key={index}/>
      )
    });

  return (
    <div className="line-items">
      {productsRows}
    </div>
  )
}