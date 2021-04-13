import { Fragment } from 'react';
import { Badge } from 'antd';
import SadImage from '../../../../../images/sad-img.png';
import { useStore } from '../../../../../Store/store';
import './RightBar.css';
import { IBag, IProduct } from './../../../../../Interface/Interface';
import CardItem from '../MiddleBar/components/CardItem';
import BagItem from './../../BagPage/MainBagPage/BagItem';

const RightBar = (): JSX.Element => {
	const { state } = useStore();
	const { bags } = state.products;
	return (
		<div className='pt-main'>
			<h3>
				Bag <Badge count={bags.length} showZero />
			</h3>

			{bags.length === 0 ? (
				<div className='rightbar-content'>
					<img src={SadImage} alt='sad-img' />
					<h3>It's empty here</h3>
					<p>Start shopping to add items to your bag</p>
				</div>
			) : (
				bags.map((item: IBag) => (
					<Fragment key={item.id}>
						<BagItem item={item} bag />
					</Fragment>
				))
			)}
		</div>
	);
};

export default RightBar;
