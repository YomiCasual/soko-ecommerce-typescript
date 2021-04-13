import { Link } from 'react-router-dom'
import './Appbar.css'
const Appbar = (): JSX.Element => {
    return (
        <div className="main-background main-padding appbar">
            <Link to="/">
            <p>Store made with SAKO</p> 
            </Link>
        </div>
    )
}

export default Appbar
