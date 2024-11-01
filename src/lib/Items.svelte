<script>
     import { Modals, closeModal, openModal } from 'svelte-modals'
    import Img from "./ui/Img.svelte"
    import Modal from "./ui/Modal.svelte";
    import Img2 from "../../back/img/5.png"

    function handleClick() {
        openModal(Modal)
      }
</script>

<div>
    <div class="container mx-auto p-2">   
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        <button on:click={handleClick} >
          <Img />
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