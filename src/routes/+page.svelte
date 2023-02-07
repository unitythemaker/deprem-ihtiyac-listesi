<script lang="ts">
	import ProductGrid from '$components/ProductGrid.svelte';
	import TextInput from '$components/TextInput.svelte';
	import type { IProduct } from '$lib/types';

	let userData = {
		name: '',
		phone: '',
		desc: '',
		addr: '',
		city: ''
	};

	// onMount(async () => {
	//   const { coords } = await getCoords();
	//   alert(`Your location is ${coords.latitude}, ${coords.longitude}`);
	// });
	let products: IProduct[] = [
		{
			id: 'isitici',
			name: 'Product 1',
			price: 100,
			qty: 1
		},
		{
			id: 'isitici2',
			name: 'Product 2',
			price: 200,
			qty: 1
		},
		{
			id: 'isitici3',
			name: 'Product 3',
			price: 300,
			qty: 1
		},
		{
			id: 'isitici4',
			name: 'Product 4',
			price: 400,
			qty: 1
		},
	];
</script>

<ProductGrid {products} />
<button class="fixed z-50 bottom-0 w-full bg-green-700 h-24 font-bold text-white text-3xl"
	>Yardim Iste</button
>

<div class="flex flex-col container items-center">
	<TextInput label="Ad Soyad" bind:value={userData.name}>
		<span slot="icon">
			<svg
				class="fill-gray-500"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<g opacity="0.8">
					<path fill="none" d="M0 0h24v24H0z" /><path
						d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
					/>
				</g>
			</svg>
		</span>
	</TextInput>
	<TextInput label="Telefon No" placeholder="Telefon No" bind:value={userData.phone}>
		<span slot="icon">
			<svg
				class="fill-gray-500"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<g opacity="0.8">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
					/>
				</g>
			</svg>
		</span>
	</TextInput>
	<TextInput label="Adres" bind:value={userData.addr}>
		<span slot="icon">
			<svg
				class="fill-gray-500"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<g opacity="0.8">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"
					/>
				</g>
			</svg>
		</span>
	</TextInput>
	<div class="w-full px-4 md:w-1/2 lg:w-1/3">
		<div class="mb-12">
			<label for="desc" class="mb-3 block text-base font-medium text-black"> Aciklama </label>
			<div class="relative">
				<textarea
          id="desc"
					rows="4"
					placeholder="Aciklama giriniz"
					class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
				/>
				<span class="absolute top-[18px] left-4">
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.8">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.56622 3.23223C2.03506 2.76339 2.67094 2.5 3.33398 2.5H9.16732C9.62755 2.5 10.0006 2.8731 10.0006 3.33333C10.0006 3.79357 9.62755 4.16667 9.16732 4.16667H3.33398C3.11297 4.16667 2.90101 4.25446 2.74473 4.41074C2.58845 4.56702 2.50065 4.77899 2.50065 5V16.6667C2.50065 16.8877 2.58845 17.0996 2.74473 17.2559C2.90101 17.4122 3.11297 17.5 3.33398 17.5H15.0006C15.2217 17.5 15.4336 17.4122 15.5899 17.2559C15.7462 17.0996 15.834 16.8877 15.834 16.6667V10.8333C15.834 10.3731 16.2071 10 16.6673 10C17.1276 10 17.5006 10.3731 17.5006 10.8333V16.6667C17.5006 17.3297 17.2373 17.9656 16.7684 18.4344C16.2996 18.9033 15.6637 19.1667 15.0006 19.1667H3.33398C2.67094 19.1667 2.03506 18.9033 1.56622 18.4344C1.09738 17.9656 0.833984 17.3297 0.833984 16.6667V5C0.833984 4.33696 1.09738 3.70107 1.56622 3.23223Z"
								fill="#637381"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.6673 2.39909C16.4195 2.39909 16.1818 2.49754 16.0066 2.67278L8.25314 10.4262L7.81264 12.1882L9.57463 11.7477L17.3281 3.99427C17.5033 3.81903 17.6018 3.58135 17.6018 3.33352C17.6018 3.0857 17.5033 2.84802 17.3281 2.67278C17.1528 2.49754 16.9152 2.39909 16.6673 2.39909ZM14.8281 1.49427C15.3159 1.00647 15.9775 0.732422 16.6673 0.732422C17.3572 0.732422 18.0188 1.00647 18.5066 1.49427C18.9944 1.98207 19.2684 2.64367 19.2684 3.33352C19.2684 4.02338 18.9944 4.68498 18.5066 5.17278L10.5899 13.0894C10.4831 13.1962 10.3493 13.272 10.2028 13.3086L6.86945 14.142C6.58547 14.213 6.28506 14.1298 6.07808 13.9228C5.8711 13.7158 5.78789 13.4154 5.85888 13.1314L6.69222 9.79808C6.72885 9.65155 6.80461 9.51773 6.91141 9.41093L14.8281 1.49427Z"
								fill="#637381"
							/>
						</g>
					</svg>
				</span>
			</div>
		</div>
	</div>
	<TextInput label="Adres" bind:value={userData.addr}>
		<span slot="icon">
			<svg
				class="fill-gray-500"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<g opacity="0.8">
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zm-2 0V4H5v16h14zM8 11h3v2H8v-2zm0-4h3v2H8V7zm0 8h3v2H8v-2zm5 0h3v2h-3v-2zm0-4h3v2h-3v-2zm0-4h3v2h-3V7z"
					/>
				</g>
			</svg>
		</span>
	</TextInput>
</div>

<div class="h-24"></div>
