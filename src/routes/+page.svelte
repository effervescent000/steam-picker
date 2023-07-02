<script lang="ts">
	// PROPS
	export let data;

	// STATE

	// LOGIC
</script>

{#each data.games as game}
	<div>{game.name}</div>
{/each}
