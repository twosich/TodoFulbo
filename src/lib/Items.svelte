<script lang="ts">
    import { Modals, closeModal, openModal } from 'svelte-modals'
    import Modal from "./ui/Modal.svelte";

    function handleClick() {
        openModal(Modal)
    }

    import { onMount } from "svelte";
	  let product = [];

	  onMount(async () => {
    	  const response = await fetch("http://localhost:3000/productos");
    	  product = await response.json();
  		}
	  );

</script>

<div>
    <div class="container mx-auto p-2">   
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        {#each product as productos}
        <button on:click={handleClick} >
          <div class="relative rounded-lg bg-black">
            <img src={productos.imagen} alt="Post" class="px-2 transition-all duration-300 hover:scale-110 w-full h-auto object-cover rounded-lg">
          </div>
        </button>
        {/each}
      </div>
    </div>
  </div> 

  <Modals>
    <div
      slot="backdrop"
      class="backdrop"
      on:click={closeModal}
    />
  </Modals>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }
</style>