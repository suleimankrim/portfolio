<script lang="ts">
	export let data;
	export const ssr = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full h-[550px] bg-purple-300 flex justify-center items-center">
	{#if data?.posts.month}
		<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
			<img class="w-full" src={data.posts.img} alt={data.posts.alt} />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">{data.posts.safe_title}</div>
				<p class="text-gray-700 text-base">
					Date: {data.posts.month}
					{data.posts.day}, {data.posts.year}
				</p>
			</div>
		</div>
	{:else}
		<div class="text-white font-bold text-xl">Loading...</div>
	{/if}
</section>

<style>
</style>
