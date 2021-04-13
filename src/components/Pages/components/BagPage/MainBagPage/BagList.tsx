
import { Fragment } from 'react'
import { Badge } from 'antd'
import BagItem from './BagItem';
import { useStore } from '../../../../../Store/store';
import { IBag } from '../../../../../Interface/Interface';

const BagList = (): JSX.Element => {
    const { state } = useStore()
    const filteredProducts = state.products.bags

    return (
        <div className="pt-main">
        <h3>Electronics <Badge count={filteredProducts.length} showZero /></h3>
        <div className="middleBar-overflow">
        {  
        filteredProducts.map((item: IBag,index: number) => 
        <Fragment 
        key={item.id} >
            <BagItem 
            item={item} 
            index={index}
            />
        </Fragment>
          )
        }
        </div>
        </div>
    )
}

export default BagList
