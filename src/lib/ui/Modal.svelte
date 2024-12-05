<script lang="ts">
	import { closeModal } from 'svelte-modals'
	import Content from './Content.svelte';
	export let isOpen  
</script>
  
  {#if isOpen}
	<div role="dialog" class="modal">
		<Content />
	</div>
	{/if}

