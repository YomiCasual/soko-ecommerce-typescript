import { Row, Col, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IBag, IProduct } from '../../../../../Interface/Interface';
import { useStore } from '../../../../../Store/store';
import { ADD_TO_BAG, removeFromBag } from '../../../../../Store/Action';
import { IBagItem } from './../../../../../Interface/Interface';


const BagItem = ({
	item,
	bag = false,
	index,
}: IBagItem) => {
	const { state, dispatch } = useStore();
	const onClick = (item: IBag) => {
		dispatch(removeFromBag(item))
	};
	return (
			<Row className='card-item' 
				style={{
					marginBottom: "2rem"
				}}
			align='middle'>
					<Link
			to={{
				pathname: `/product/:${item.id}`,
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
						<Button
							onClick={() => onClick(item)}
							icon={<DeleteOutlined />}
							size='small'
							style={{ float: 'right' }}>
							Remove
						</Button>
				</Col>
			</Row>
	);
};

export default BagItem;
