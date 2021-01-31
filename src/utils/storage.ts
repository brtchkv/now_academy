import {FluidObject} from 'gatsby-image';
import {RootCategory} from './utils';

export type ProductId = string;

export interface Product extends ProductById {
	id: ProductId;
}

const localStorage = typeof window !== 'undefined' && window.localStorage || {
	getItem: () => undefined,
	setItem: () => undefined,
};

export interface Image {
	alt: string;
	localFile: {
		childImageSharp: {
			fluid: FluidObject
		}
	};
}

export interface ProductById {
	name: string;
	slug: string;
	quantity: number;
	image?: Image;
	price: number;
	salePrice: number;
	regularPrice: number;
	rootCategory: RootCategory;
}

export function getProductsFromStorage(): Product[] {
	const reduxStore = JSON.parse(localStorage.getItem('redux-store') || '{}');
	return reduxStore.products || [];
}
