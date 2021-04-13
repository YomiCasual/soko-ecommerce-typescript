
import { Fragment } from 'react'
import { Badge } from 'antd'
import { useStore } from '../../../../../../Store/store'
import CardItem from './CardItem'
import { IProduct, IState } from './../../../../../../Interface/Interface';

const CardList = (): JSX.Element => {
    const { state }  = useStore()
    const filteredProducts: IProduct[] = state.products.selectedCategoryProduct
    return (
        <div className="pt-main">
        <h3>{state.products.selectedCategory} <Badge count={filteredProducts.length} showZero /></h3>
        <div className="middleBar-overflow">
        {  
        filteredProducts.map((item: IProduct,index: number) => 
        <Fragment 
        key={item.id} >
            <CardItem 
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

export default CardList
