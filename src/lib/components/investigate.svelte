<script>
import CardSlot from "./cardSlot.svelte";

    let dragover = false; 

</script>

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
    <p class="text-white font-bold">INVESTIGATE</p>
    <CardSlot/>
    <p class="text-white font-bold"> WITH </p>
    <CardSlot/>
</div>

