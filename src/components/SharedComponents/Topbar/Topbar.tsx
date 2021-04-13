import { Row, Col, Divider } from 'antd';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const Topbar = (): JSX.Element => {
	return (
		<>
			<div className='main-padding topbar'>
				<Row align='middle'>
					<Col md={18}>
						<LeftSide />
					</Col>
					<Col md={6}>
						<RightSide />
					</Col>
				</Row>
			</div>
			<Divider />
		</>
	);
};

export default Topbar;
