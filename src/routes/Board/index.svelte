<script>
import Card from "$lib/components/card.svelte";
import Investigate from "$lib/components/investigate.svelte";
import Popup from "$lib/components/popup.svelte";
import { popupActive } from "$lib/stores/data";
import { cards } from "$lib/data/cards";
</script>

<div class="bg-slate-400 w-full h-[93%] overflow-hidden relative" id="board">
    <Investigate/>
    {#each cards as card}
        <Card cardName="{card.name}" imageURL="{card.icon}" cardDescription="{card.description}" posY="{100 + 266 * card.column}" posX="{40 + 202 * card.row}" colorDeg="{card.color}"/>
    {/each}
    {#if $popupActive}
    <Popup/>
    {/if}
</div>