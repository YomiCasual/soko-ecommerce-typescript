import { Row, Col } from 'antd';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import MiddleBar from './MiddleBar/MiddleBar';
import RightBar from './RightBar/RightBar';
const Homepage = () => {
	return (
			<Row gutter={24} style={{ height: "100%"}}>
				<Col md={6}>
					<LeftSideBar />
				</Col>
				<Col md={12}>
					<MiddleBar />
				</Col>
				<Col md={6}>
					<RightBar />
				</Col>
			</Row>
	);
};

export default Homepage;
