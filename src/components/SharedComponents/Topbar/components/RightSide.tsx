import { Badge } from 'antd'
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useStore } from '../../../../Store/store';
const RightSide = (): JSX.Element => {
    const {state} = useStore()
    const { bags } = state.products
    return (
        <div className="topbar-right">
            <Link to="/bag">
                <div className="menu cursor">
                <ShoppingOutlined className="icon" />
                <Badge size="small" count={bags.length} />
                <h5 className="menu-text">Bag</h5>
                </div>
            </Link>
            <div className="menu cursor">
            <UserOutlined className="icon" />
            <h5 className="menu-text">Account</h5>
            </div>
        </div>
    )
}

export default RightSide
