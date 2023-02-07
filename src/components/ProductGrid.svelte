<script lang="ts">
	import type { IProduct } from '$lib/types';
	import Product from './Product.svelte';

	export let products: IProduct[];
</script>

<section class="bg-white py-20 lg:py-[120px]">
	<div class="container mx-auto">
		<div class="-mx-4 flex flex-wrap">
			{#each products as product}
				<Product {product} />
			{/each}
		</div>
	</div>
</section>
