<script lang="ts">
	import { closeModal } from 'svelte-modals'
	import image from '../../../back/img/5.png'
	export let isOpen
  
  </script>
  
  {#if isOpen}
	<div role="dialog" class="modal">
	  <div class="grid grid-rows-3 grid-flow-col gap-4 aling-center bg-white pointer-events-auto p-4 rounded-md leading-10">
			<div class="row-span-3">
				<div class="mt-4">
					<img src={image} class=" size-80 p-1" alt="" srcset="">
				</div>	
			</div>

			<div class="col-span-2">
				<div class="flex">
					<div class="flex-1">
						<h2 class="text-3xl font-bold">Camiseta Manchester City</h2>
					</div>
					<div class="pl-5 flex-none">
						<button on:click={closeModal}>X</button>
					</div>
				</div>	
			</div>

			<div class="row-span-2 col-span-2">
				<div class="grid grid-cols-1 grid-rows-3">
					<div class="">
						<h1>Example</h1>
					</div>
					<div class="">
						<h1>Example</h1>
					</div>
					<div class="">
						<button class="rounded-2xl p-3 bg-gradient-to-r from-sky-600 to-sky-800 hover:bg-pink-300 md:p-4">
							<h1 class="text-xl md:text-2xl p-1 text-white font-bold">Comprar</h1>
						</button>	
					</div>
				</div>

		  
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