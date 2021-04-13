export interface IState {
	products: IProduct[];
	bags: IBag[];
	category: ICategory[];
	selectedCategory: string;
	selectedCategoryProduct: IProduct[]
}

export interface IAction {
	type: string;
	payload?: any;
}

export interface IProduct {
	id: number;
	// name?: string;
	price: number;
	category: string;
	image: string;
	inCart?: boolean;
	title: string;
	description: string;
}

export interface IBag extends IProduct {
	count: number
}

export interface ICategory {
	id: number;
	name: string;
	count: number;
}


export interface ISingleProductPage {
	history: any;
	location: { state: { record: IProduct } };
	match: { params : { id: string}}
}

export interface IBagItem {
	item: IBag,
	bag?: boolean,
	index?: number
}


