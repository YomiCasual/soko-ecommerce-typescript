import { IProduct } from './../Interface/Interface';


type TFilterCategory = ({
    products: IProduct,
    selectedCategory: string
}) => IProduct

export let filterCategory: TFilterCategory = ({products, selectedCategory}) => {
    return ([...products].filter(item => {
     return  item.category.toLowerCase() === selectedCategory.toLowerCase()
    }))
}