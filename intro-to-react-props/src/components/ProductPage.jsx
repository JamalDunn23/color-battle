import ProductItem from "./ProductItem.jsx";

const ProductPage =() =>{

    const products = [
        { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
        { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
        { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
        { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
      ];

    return(
        <div>
           <ul>
            {
                products.map( (eachProduct)=>{return <ProductItem key ={eachProduct.name} productToRender={{eachProduct}} />})
            }
           </ul>
        </div>
    )
}
export default ProductPage