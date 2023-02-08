<script lang="ts">
	export let placeholder: string = 'İstediğiniz şeyi arayın';
	export let value: string;
</script>

<div class="flex my-10 justify-center">
	<div class="w-full px-4 md:w-1/2 lg:w-1/3">
		<div class="relative">
			<input
				type="search"
				bind:value
				{placeholder}
				class="w-full rounded-md border border-form-stroke p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
			/>
			<span class="absolute top-1/2 left-4 -translate-y-1/2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
					stroke-width="1.5"
					stroke="currentColor"
					width="20"
					height="20"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</span>
		</div>
	</div>
</div>
