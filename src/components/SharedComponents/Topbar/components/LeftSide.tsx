import { Avatar } from 'antd';
import { ShopOutlined } from '@ant-design/icons';

const LeftSide = () => {
	return (
		<section className="topbar-left">
			<div style ={{
				marginRight: "1rem"
			}}>
				<Avatar size={64} icon={<ShopOutlined />} />
			</div>
			<div>
				<h2 style={{ marginBottom: "2px"}}>Target</h2>
				<p className="p-ash" style={{ marginBottom: "0"}} >Cham Towers, Plot 12 Nkrumah Rd, Kampala, Ug</p>
			</div>
		</section>
	);
};

export default LeftSide;
