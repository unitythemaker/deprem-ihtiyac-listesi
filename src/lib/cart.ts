import { writable, type Writable } from 'svelte/store';
import type { ICartItem, IProduct } from './types';

export const cart: Writable<ICartItem[]> = writable([]);

export function addToCart(product: IProduct) {
  console.log(product, 'product');
	cart.update((items) => {
		const item = items.find((item) => item.id === product.id);
		if (item) {
			item.qty += 1;
		} else {
			items.push({ id: product.id, qty: 1 });
		}
		return items;
	});
}

export function removeFromCart(product: IProduct) {
	cart.update((items) => {
		const item = items.find((item) => item.id === product.id);
		if (item) {
			item.qty -= 1;
		}
		return items;
	});
}
