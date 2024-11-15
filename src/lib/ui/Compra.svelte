<script lang="ts">
	import { closeModal } from 'svelte-modals'
	import image from '../../../back/img/5.png'
	export let isOpen 
  </script>
  
  {#if isOpen}
	<div role="dialog" class="modal">
        <div class="bg-white pointer-events-auto p-4 rounded-md leading-10">
	        <div class="">
		        <button on:click={closeModal}>X</button>
	        </div>
        </div>
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