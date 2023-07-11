<script lang="ts">
	import f from './main';
	import { onMount } from 'svelte';
	import type { Joke } from './(type)';

	export let data: Joke;

	onMount(async () => {
		data = await f();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full h-full bg-purple-300 flex justify-center items-center">
	{#if data?.month}
		<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
			<img class="w-full" src={data.img} alt={data.alt} />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{data.safe_title}</div>
				<p class="text-gray-700 text-base">
					Date: {data.month}
					{data.day}, {data.year}
				</p>
			</div>
		</div>
	{:else}
		<div class="text-white font-bold text-xl">Loading...</div>
	{/if}
</section>

<style>
</style>
