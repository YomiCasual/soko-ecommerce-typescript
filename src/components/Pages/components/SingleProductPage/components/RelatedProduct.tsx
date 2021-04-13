import { useStore } from '../../../../../Store/store'


const RelatedProduct = (): JSX.Element => {
    const { state } = useStore()
    const relatedProducts = state.products.selectedCategoryProduct
    return (
        <div className="related-products" >
           <h3>Related Products</h3> 
           <div className="wrapper">

           </div>
           <div className="related-products-content">
               {
                   relatedProducts.map((product) => (
                    <div className="single-related-product">
                        <div className="image-wrapper">
                        <img src={product.image}  alt="product-img" />
                        </div>
                        <h5>{product.title}</h5>
                    </div>
                   ))
               } 
           </div>
        </div>
    )
}

export default RelatedProduct
