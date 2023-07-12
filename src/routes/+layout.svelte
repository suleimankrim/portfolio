<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import facebook from '$lib/img/facebook-svgrepo-com.svg';
	import github from '$lib/img/github.svg';
	import tweter from '$lib/img/twitter-svgrepo-com.svg';
	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<div class="h-screen w-screen overflow-hidden">
	<Header />

	<main class="h-full">
		<slot />
		<footer class="w-screen h-full">
			<div class="flex justify-between bg-second h-full">
				<a href="https://www.facebook.com/" class=""
					><img class="w-5 h-5 ml-4" src={facebook} alt="logo" /></a
				>
				<a href="https://github.com/" class=""><img class="w-6 h-6" src={github} alt="logo" /></a>
				<a href="https://twitter.com/?lang=en" class=""
					><img class="w-6 h-6 mr-4" src={tweter} alt="logo" /></a
				>
			</div>
		</footer>
	</main>
</div>
