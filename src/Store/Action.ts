import StoreProducts from '../data/data.json';
import { IAction, IBag, IProduct } from './../Interface/Interface';
import { Products } from './../data/newData';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const ADD_TO_BAG = 'ADD_TO_BAG';
export const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG';
// Promise<{ type: string; payload: { data: { id: number; name: string; price: number; category: string; image: string; }[]
export const fetchProduct = () => {
    // fetch('https://fakestoreapi.com/products')
    // .then(res => res.json())
    // .then((product: IProduct[]) => {
    //     console.log(product)
    //     return {
    //         type: FETCH_PRODUCTS,
    //         payload: product,
    //     };
    // });
    console.log(Products)
    return {
        type: FETCH_PRODUCTS,
        payload: Products
    }

};

export const selectCategory = (payload: string) => ({
	type: SELECT_CATEGORY,
	payload,
});

export const addToBag = (payload: IProduct) => ({
	type: ADD_TO_BAG,
	payload,
});

export const removeFromBag = (payload: IBag) => ({
	type: REMOVE_FROM_BAG,
	payload,
});
