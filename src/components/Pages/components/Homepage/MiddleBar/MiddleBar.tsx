
import { Input } from 'antd'

import CardList from './components/CardList'
import './MiddleBar.css'

const { Search } = Input;

const MiddleBar = () => {
    return (
        <div className="middleBar">
            <div className="middle-component">
            <Search 
            placeholder="Search for Products"  enterButton />
            <CardList />
            </div>
        </div>
    )
}

export default MiddleBar
