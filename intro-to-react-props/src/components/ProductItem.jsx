



const ProductItem =({productToRender})=>{



    console.log("props:", props)
    
    return (
        <li>
            {productToRender.name} - ${productToRender.price}
        </li>
        )
}
export default ProductItem