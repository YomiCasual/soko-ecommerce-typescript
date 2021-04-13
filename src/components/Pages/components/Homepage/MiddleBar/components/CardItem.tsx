import { Row, Col, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import ProductImage from '../../../../../../images/product-image-1.jpg';
import { IProduct, IBag } from '../../../../../../Interface/Interface';
import { useStore } from '../../../../../../Store/store';
import { ADD_TO_BAG, removeFromBag } from './../../../../../../Store/Action';
import { Link } from 'react-router-dom';
import { IBagItem } from './../../../../../../Interface/Interface';

const CardItem = ({
	item,
	bag = false,
	index,
}: IBagItem) => {
	const { state, dispatch } = useStore();
	const { bags } = state.products;
	const onClick = (item: IProduct  ) => {
		dispatch({
			type: ADD_TO_BAG,
			payload: item
		});
	};
	return (
			<Row className='card-item' 
				style={{
					marginBottom: "2rem"
				}}
			align='middle'>
					<Link
			to={{
				pathname: `/product/${item.id}`,
				state: {
					record: item,
				},
			}}>

				<Col xs={5}>
					<div className='card-image'>
						<img src={item.image} alt='product-img' />
					</div>
				</Col>
			</Link>
				<Col xs={18} className='card-content'>
					<h4>{item.title}</h4>
					<p>UGX {item.price}</p>
					{bag ? (
						<Button
							onClick={() => onClick(item)}
							icon={<DeleteOutlined />}
							size='small'
							style={{ float: 'right' }}>
							Remove
						</Button>
					) : (
						<Button
							onClick={() => onClick(item)}
							icon={<PlusOutlined />}
							disabled={item.inCart}
							size='small'
							style={{ float: 'right' }}>
							{item.inCart ? 'In Cart' : 'Add'}
						</Button>
					)}
				</Col>
			</Row>
	);
};

export default CardItem;
