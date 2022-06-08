<script>
import CardSlot from "./cardSlot.svelte";

    let dragover = false; 

</script>

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
    <p class="text-white font-bold uppercase">interrogate</p>
    <CardSlot/>
    <p class="text-white font-bold uppercase">about</p>
    <CardSlot/>
</div>

