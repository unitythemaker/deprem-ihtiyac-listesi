<script lang="ts">
	export let isCategoriesOpen: boolean = false;
</script>

{#if isCategoriesOpen}
	<section class="h-screen bg-gray-2 fixed z-50">
		<div
			class="flex h-screen w-full max-w-[350px] flex-col justify-between overflow-y-auto bg-white shadow-card pt-10 min-w-[300px]"
		>
			<div>
				<nav>
					<ul>
						<li>
							<a
								href="#"
								class="relative flex items-center border-r-4 border-transparent py-[10px] pl-10 pr-11 text-base font-medium text-body-color duration-200 hover:border-primary hover:bg-gray-2 hover:text-primary"
							>
                Bakliyat
							</a>
						</li>

						<li>
							<div class="mx-10 my-3 h-[1px] bg-stroke" />
						</li>

						<li>
							<a
								href="#"
								class="relative flex items-center border-r-4 border-transparent py-[10px] pl-10 pr-11 text-base font-medium text-body-color duration-200 hover:border-primary hover:bg-gray-2 hover:text-primary"
							>
								Aydinlatma
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>
{/if}
