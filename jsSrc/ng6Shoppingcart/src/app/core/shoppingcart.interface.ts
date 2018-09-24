export interface Shoppingcart {
	id: number;
	name: String;
	totalDollar?: number;
	totalPoint?: number;
	items?: ShoppingcartItem[];
}

export interface ShoppingcartItem {
	id: number;
	quantity: number;
	priceDollar: number;
	pricePoint?: number;
	productName: string;
	productId?: number;
}
