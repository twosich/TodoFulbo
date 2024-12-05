<script lang="ts">
	import { closeModal } from 'svelte-modals'
	export let isOpen 
  </script>
  
  {#if isOpen}
	<div role="dialog">
        <div class="bg-white pointer-events-auto p-4 rounded-md leading-10">
	        <div class="">
		        <button on:click={closeModal}>X</button>
	        </div>
        </div>
    </div>
  {/if}

 