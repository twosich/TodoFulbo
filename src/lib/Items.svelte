<script>
    import Img from "./ui/Img.svelte"
    import Modal from "./ui/Modal.svelte";

    let isModalOpen = false;
    function openModal() {
      isModalOpen = true;
    }

    function closeModal(){
      isModalOpen = false;
    }
</script>

<div>
    <div class="container mx-auto p-2">   
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
        <button on:click={openModal}>
          <Img />
        </button>

        <Modal isOpen{modalOpen} class="bg-black" close={closeModal}>
          <h2>example</h2>
        </Modal>
        
      </div>
    </div>
  </div> 