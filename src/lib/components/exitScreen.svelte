<script>
import { cards } from "$lib/data/cards";
import { icon, win} from "$lib/stores/data";

    
</script>

<div class="fixed w-screen h-screen" style="background-color: rgba(0,0,0,0.5);">
    {#if $win}
    <div class="absolute inset-1/4 bg-white rounded-xl w-1/2 min-h-[50%] h-fit bg-green-600 flex z-30">
        <h1 class="font-bold uppercase text-2xl text-white m-auto"> You win </h1>
    </div>
    {:else}
    <div class="absolute inset-1/4 bg-white rounded-xl w-1/2 min-h-[50%] h-fit bg-red-600 flex">
        <h1 class="font-bold uppercase text-2xl text-white m-auto"> You lose </h1>
    </div>
    {/if}
</div>