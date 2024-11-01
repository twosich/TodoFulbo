<script>
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
						<h2 class="text-3xl font-bold">Remera Manchester City</h2>
					</div>
					<div class="pl-5 flex-none">
						<button on:click={closeModal}>X</button>
					</div>
				</div>	
			</div>

			<div class="row-span-2 col-span-2">
				<ul>
					<li>Ejemplo</li>
					<li>Ejemplo</li>
					<li>Ejemplo</li>
				</ul>
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

    /* allow click-through to backdrop */
    pointer-events: none;
  }

  p {
    margin-top: 16px;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }

</style>