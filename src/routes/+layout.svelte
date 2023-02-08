<script>
	import '../app.css';
	import Navbar from '$components/Navbar.svelte';

	import * as Sentry from '@sentry/svelte';
	import { BrowserTracing } from '@sentry/tracing';
	import Categories from '$components/Categories.svelte';

	// Initialize the Sentry SDK here
	Sentry.init({
		dsn: 'https://dda54b5af0744e919722cc0848bbe856@o4504639882199040.ingest.sentry.io/4504639894519808',
		integrations: [new BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0
	});

	export const prerender = true;
	export let isCategoriesOpen = false;
</script>

<Categories bind:isCategoriesOpen={isCategoriesOpen} />
<Navbar bind:isCategoriesOpen={isCategoriesOpen} />
<slot />
