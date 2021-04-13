import { category } from '../data/data';
import { IAction, IBag, IProduct, IState } from './../Interface/Interface';
import { ADD_TO_BAG, FETCH_PRODUCTS, REMOVE_FROM_BAG, SELECT_CATEGORY } from './Action';
import { filterCategory } from './SeperateActions';

const products = (state: IState ={
     products: [], 
     bags: [], 
     category: category,
     selectedCategory: category[0].name || "",
     selectedCategoryProduct: []
    } , action:IAction) => {
  

    switch(action.type) {
        case FETCH_PRODUCTS:
            let categoryCount = action.payload.reduce((acc:any, curr: IProduct) => {
                let category = curr.category.toLowerCase()
               acc[category] = acc[category] ? ++acc[category] : 1
               return acc 
            }, {})
            let newCategory = [...category].map(item => {
                if (categoryCount[item.name.toLowerCase()]) {
                    item.count = categoryCount[item.name.toLocaleLowerCase()]
                }
            
                return item
            })

            let filteredCategory = filterCategory({
                products: state.products,
                selectedCategory: state.selectedCategory
             })
            
            return {...state, 
                products: action.payload, 
                category: newCategory,
                selectedCategoryProduct:filteredCategory
             }
        case SELECT_CATEGORY: 
        let newFilteredCategory = filterCategory({
            products:  state.products,
            selectedCategory: action.payload
         })
       
            return {...state, selectedCategory: action.payload, selectedCategoryProduct: newFilteredCategory}
        case ADD_TO_BAG:
        
            let newProducts: IProduct[] = [...state.products].map(product => {
                if (product.id === action.payload.id) {
                    product.inCart = true
                }
                return product
            })
        
            return {
                ...state, products: newProducts, bags: [...state.bags, {...action.payload, inCart: true, count: 1}]
            }
        case REMOVE_FROM_BAG:
            let products: IProduct[] = [...state.products].map(product => {
                if (product.id === action.payload.id) {
                    product.inCart = false
                }
                return product
            })

            let newBag: IBag[] = [...state.bags].filter(bagItem => bagItem.id !== action.payload.id)
            
            return {
                ...state, products: products, bags: newBag
            }
        default:
            return state
    }
}


let reducers = {
    products
}


export default reducers