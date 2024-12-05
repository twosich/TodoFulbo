<script lang="ts">
    import { onMount } from "svelte";
    import { closeModal } from 'svelte-modals'
    
    let product = [];

    onMount(async () => {
        const response = await fetch("http://localhost:3000/productos");
        product = await response.json();
        }
    );
</script>

<div class="grid grid-rows-3 grid-flow-col gap-4 align-center bg-white pointer-events-auto p-4 rounded-md leading-10">
    {#each product as productos}
    <div class="row-span-3">
        <div class="mt-4 object-contain">
            <img src={productos.imagen} class=" size-80 p-1" alt="" srcset="">
        </div>	
    </div>

    <div class="col-span-2">
        <div class="flex">
            <div class="flex-1">
                <h2 class="text-3xl font-bold">{productos.nombre}</h2>
            </div>
            <div class="pl-5 flex-none">
                <button on:click={closeModal}>X</button>
            </div>
        </div>	
    </div>

    <div class="row-span-2 col-span-2">
        <div class="grid grid-cols-1 grid-rows-3">
            <div class="">
                <p>{productos.descripcion}</p>
            </div>
            <div class="text-1xl text-center font-bold">
                <h1>{productos.precio}ARS$</h1>
            </div>
            <div class="">
                <button class="rounded-2xl p-3 bg-gradient-to-r from-sky-600 to-sky-800 hover:bg-pink-300 md:p-4">
                    <h1 class="text-xl md:text-2xl p-1 text-white font-bold">Comprar</h1>
                </button>	
            </div>
        </div>
    </div>
    {/each}
</div>
