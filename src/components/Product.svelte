<script lang="ts">
	import { addToCart, cart } from '$lib/cart';
	import type { IProduct } from '$lib/types';

	export let product: IProduct;
	$: cartItem = $cart.find((item) => item.id === product.id);
</script>

<div class="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
	<div class="mb-10">
		<div class="relative mb-5 overflow-hidden rounded h-[385px] flex items-center">
			<img src="https://d38m1yteyr1wyz.cloudfront.net/img/{product.id}.webp" alt="product" class="w-full" />
		</div>
		<div class="text-center">
			<h3>
				<div
					class="hover:text-primary xs:text-xl mb-2 block text-lg font-semibold text-black sm:text-lg md:text-xl"
				>
					{product.name}
				</div>
			</h3>
			<!-- <p class="mb-4 text-base font-semibold text-black">{product.price} TL</p> -->
			{#if cartItem && cartItem.qty > 0}
				<div
					class="mr-3 mb-4 inline-flex items-center rounded border border-[#e7e7e7] text-base font-medium text-black"
				>
					<button
						on:click={() => cartItem && cartItem.qty > 0 && cartItem.qty--}
						class="inline-block cursor-pointer select-none py-[7px] px-4"
					>
						-
					</button>
					<span class="inline-block py-[7px] px-4">{cartItem ? cartItem.qty : 0}</span>
					<button
						on:click={() => cartItem && cartItem.qty++}
						class="inline-block cursor-pointer select-none py-[7px] px-4"
					>
						+
					</button>
				</div>
			{:else}
				<button
					on:click={() => addToCart(product)}
					class="inline-flex items-center justify-center rounded-md border border-black py-2 px-5 text-center text-sm font-semibold text-black transition hover:bg-black hover:text-white"
				>
					Ekle
				</button>
			{/if}
		</div>
	</div>
</div>
