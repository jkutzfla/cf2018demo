// shoppingcart.interface.ts
export interface Shoppingcart {
	id: number;
	name: String;
	totalDollar?: number;
	totalPoint?: number;
	items?: ShoppingcartItem[];
	dateCreated: Date;
	dateModified: Date;
}

export interface ShoppingcartItem {
	id: number;
	quantity: number;
	priceDollar: number;
	pricePoint?: number;
	productName?: string;
	productId?: number;
	dateCreated?: Date;
	dateModified?: Date;
	totalDollar: number;
}
