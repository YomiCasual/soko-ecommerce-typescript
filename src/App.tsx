import { useEffect } from 'react'
import  { Switch, Route} from 'react-router-dom'
import Homepage from './components/Pages/components/Homepage/Homepage';
import Appbar from './components/SharedComponents/Appbar';
import Topbar from './components/SharedComponents/Topbar/Topbar';
import { fetchProduct } from './Store/Action';
import { useStore } from './Store/store';
import SingleProductPage from './components/Pages/components/SingleProductPage/SingleProductPage';
import BagPage from './components/Pages/components/BagPage/BagPage';
import BuyNow from './components/Pages/components/BuyNow/BuyNow';


const App = (): JSX.Element => {
    const { dispatch }  = useStore()
    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])
    return (
        <>
        <Appbar />
        <Topbar />
        <div className="main-padding app-content">
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/product/:id" component={SingleProductPage}/>
                <Route exact path="/bag" component={BagPage}/>
                <Route exact path="/buyNow" component={BuyNow}/>
            </Switch>
        </div>
        </>
    )
}

export default App;
