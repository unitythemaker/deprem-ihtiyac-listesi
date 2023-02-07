<script lang="ts">
	let navbarOpen = false;
	let cartOpen = false;
</script>

<header class="flex w-full items-center bg-white">
	<div class="container mx-auto">
		<div class="relative -mx-4 flex items-center justify-center">
			<div class="w-60 max-w-full px-4">
				<a href="/" class="block w-full py-5 lg:py-3">
					<img
						src="/assets/images/logo.png"
						alt="logo"
						class="w-full"
					/>
				</a>
			</div>
			<!-- <div class="flex w-full items-center justify-between px-4">
				<div class="w-full">
					<button
						on:click={() => (navbarOpen = !navbarOpen)}
						id="navbarToggler"
						class="{navbarOpen &&
							'navbarTogglerActive'} ring-primary absolute sm:hidden right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px]"
					>
						<span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]" />
						<span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]" />
						<span class="bg-body-color relative my-[6px] block h-[2px] w-[30px]" />
					</button>

					<nav
						id="navbarCollapse"
						class="{!navbarOpen &&
							'hidden'} absolute right-4 top-full w-full max-w-[250px] justify-end rounded-lg bg-white py-5 px-6 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none"
					>
						<ul class="block lg:flex">
							<li>
								<a
									href="/hakkimizda"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:mx-6 lg:inline-flex lg:py-6"
								>
								Hakkımızda
								</a>
							</li>
							<li>
								<a
									href="/iletisim"
									class="text-dark hover:text-primary flex py-2 text-base font-medium lg:mx-6 lg:inline-flex lg:py-6"
								>
									İletişim
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div> -->
		</div>
	</div>
</header>
