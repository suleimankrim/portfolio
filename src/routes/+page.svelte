<script>
	import Sul from '../lib/img/avatar727185882.jpg';
	import Bio from './Bio.svelte';
	import Project from './Project.svelte';
	import Skill from './Skill.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-screen h-full bg-purple-300">
	<h1 class="text-7xl text-white font-bold block text-center">I'm <span>A FrontEnd Dev.</span></h1>
	<div class="grid grid-cols-2 gap-1">
		<div class="h-full w-full pl-20 pt-9">
			<Bio />
			<Skill />
			<Project />
		</div>
		<div class="w-full h-full justify-center items-center">
			<img src={Sul} alt="profile" class="rounded-full w-64 h-64 mt-20 ml-64" />
		</div>
	</div>
</section>

<style>
</style>
