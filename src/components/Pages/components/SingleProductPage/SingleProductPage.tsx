import { useState, useEffect } from 'react'
import { Row, Col, Typography, Button, Carousel } from 'antd';
import { addToBag } from '../../../../Store/Action';
import { useStore } from '../../../../Store/store';
import { IProduct, ISingleProductPage } from './../../../../Interface/Interface';
import RelatedProduct from './components/RelatedProduct';
import './SingleProducePage.css'
import { Link } from 'react-router-dom';

const { Title } = Typography;


const SingleProductPage = (props: ISingleProductPage) => {
	const { state, dispatch } = useStore()

	const [product, setProduct] = useState<IProduct>({})

	useEffect(() => {
		let product: IProduct | undefined = state.products.products.find(item => item.id === parseInt(props.match.params.id))
		if (product) {
			setProduct(product)
		}
	},[state.products.bags])

	return (
		<div className="single-product-page">
			<Row gutter={25}>
				<Col xs={24} md={12}>
                    <Carousel autoplay>
					<div className='single-product-img'>
						<img src={product.image} alt='single-img' />
					</div>
					<div className='single-product-img'>
						<img src={product.image} alt='single-img' />
					</div>
					<div className='single-product-img'>
						<img src={product.image} alt='single-img' />
					</div>
                    </Carousel>
				</Col>
				<Col xs={24} md={12}>
					<div
                        className="single-product-content"
                    >
						<Title level={4}>{product.title}</Title>
						<p className="tertiary-ash">{product.description}</p>
						<Title level={5}>UGX {product.price}</Title>
						<Title level={5}
                            className="slider"
                        >UGX {product.price}</Title>

						<div>
							<Button 
							onClick={() => dispatch(addToBag(product))}
                            className="btn-special"
							disabled={product.inCart}
                            size="large">{product.inCart ? "In Cart" : "Add to Bag"}</Button>
							
							<Link to="/buyNow">
							<Button 
                            className="btn-special"
                            size="large" 
                            type='primary'>Buy Now</Button>
							</Link>
						
						</div>
					</div>
				</Col>
				<RelatedProduct />
			</Row>
			
		</div>
	);
};

export default SingleProductPage;
