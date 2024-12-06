<script lang="ts">
    import { onMount } from "svelte";
	  let product = [];

	  onMount(async () => {
    	  const response = await fetch("https://916f-45-167-220-73.ngrok-free.app");
    	  product = await response.json();
  		}
	  );

</script>

<div>
    <div class="container mx-auto p-2">   
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        {#each product as productos}
        <button>
          <div class="relative rounded-lg bg-black">
            <img src={productos.imagen} alt="Post" class="px-2 transition-all duration-300 hover:scale-110 w-full h-auto object-cover rounded-lg">
          </div>
        </button>
        {/each}
      </div>
    </div>
  </div> 
