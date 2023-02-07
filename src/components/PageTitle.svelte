<script lang="ts">
  export let upperText: string;
  export let title: string;
  export let description: string;
</script>

<div class="w-full px-4 mt-16">
	<div class="mx-auto max-w-[520px] text-center">
		<span class="mb-2 block text-lg font-semibold text-primary"> {upperText} </span>
		<h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
      {title}
		</h2>
		<p class="text-base text-body-color">
      {description}
		</p>
	</div>
</div>
