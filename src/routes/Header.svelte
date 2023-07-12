<script>
	import { page } from '$app/stores';
	import github from '$lib/img/github.svg';
	import facebook from '$lib/img/facebook-svgrepo-com.svg';
	import tweter from '$lib/img/twitter-svgrepo-com.svg';
	export const prerender = true;
</script>

<header>
	<nav class="bg-second border-gray-200 px-4 py-2.5 w-screen h-[62px]">
		<div class="flex justify-between items-center h-full w-full pb-2.5 mt-2">
			<div class="w-1/4">
				<span class=" text-first text-xl whitespace-nowrap font-bold">SULEIMAN_KARIM</span>
			</div>
			<ul class="flex font-medium font-bold justify-around w-2/5">
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="./" class="hover:no-underline text-first hover:text-red-600">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/joke' ? 'page' : undefined}>
					<a
						href="./joke"
						class="text-first hover:no-underline hover:text-red-600 hover:animate-bounce">Joke</a
					>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a href="./about" class="text-first hover:no-underline hover:text-red-600">About</a>
				</li>
			</ul>
			<div class="flex w-1/6 justify-around">
				<a href="https://www.facebook.com/" class=""
					><img class="w-5 h-5 ml-4" src={facebook} alt="logo" /></a
				>
				<a href="https://github.com/" class=""><img class="w-6 h-6" src={github} alt="logo" /></a>
				<a href="https://twitter.com/?lang=en" class=""
					><img class="w-6 h-6 mr-4" src={tweter} alt="logo" /></a
				>
			</div>
		</div>
	</nav>
</header>
