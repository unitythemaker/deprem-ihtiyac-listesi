<script lang="ts">
	export let label: string;
	export let placeholder: string | undefined = undefined;
	export let value: string;
	export let validity: boolean;
	export let options: {
		label: string;
		value: string;
	}[];

	let randomId = Math.random().toString(36).slice(2);
</script>

<div class="w-full px-4 md:w-1/2 lg:w-1/3">
	<div class="mb-12">
		<label for={randomId} class="mb-3 block text-base font-medium text-black"> {label} </label>
		<div class="relative">
			<!-- <input
					id={randomId}
					type="text"
					bind:value
					placeholder={placeholder ?? label}
					data-invalid={!validity}
					class="w-full rounded-md border border-form-stroke data-[invalid=true]:border-red-700 p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
				/> -->

			<select
				class="w-full rounded-md border border-form-stroke data-[invalid=true]:border-red-700 p-3 pl-12 text-black placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
				data-invalid={!validity}
				id={randomId}
				{placeholder}
				bind:value
			>
				{#each options as option}
					<option value={option.value}>{option.label}</option>
				{/each}
			</select>
			<span class="absolute top-1/2 left-4 -translate-y-1/2">
				<slot name="icon" />
			</span>
		</div>
	</div>
</div>
