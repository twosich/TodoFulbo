<script lang="ts">
  import icon from '../assets/logo.svg'
  import Botom from './ui/Botom.svelte'
  import Compra from './ui/Compra.svelte'
  import { Modals, closeModal, openModal } from 'svelte-modals'

  function handleClick() {
      openModal(Compra)
  }

</script>

<div class="flex flex-row p-4 bg-black items-center md:">

    <div class="flex-none mb-4 md:mb-0">
      <div class="flex">
          <img src={icon} alt="Icon" class="w-16 h-16"> 
      </div>
    </div>
  
    <div class="flex-1">
    </div>
  
    <div class="flex-none">
      <div class="flex items-center">
      <button on:click={handleClick}>
            <Botom />
      </button>
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