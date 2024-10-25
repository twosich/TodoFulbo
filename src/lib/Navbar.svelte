<script>
  import icon from '../assets/logo.svg'
  import Botom from './ui/Botom.svelte'
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
            <Botom />
      </div>
    </div>
  </div>
