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

  <style>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }
</style>