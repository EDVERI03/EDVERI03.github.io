<script>
import Card from "$lib/components/card.svelte";
import Investigate from "$lib/components/investigate.svelte";
import Popup from "$lib/components/popup.svelte";
import { popupActive, winScreenActive } from "$lib/stores/data";
import { cards } from "$lib/data/cards";
import Prosecute from "$lib/components/prosecute.svelte";
import ExitScreen from "$lib/components/exitScreen.svelte";
</script>

<div class="bg-slate-400 w-full h-[93%] overflow-hidden relative" id="board">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10">
        <Investigate/>
        <Prosecute/>
    </div>
    {#each cards as card}
        <Card cardName="{card.name}" imageURL="{card.icon}" cardDescription="{card.description}" posY="{100 + 266 * card.column}" posX="{40 + 202 * card.row}" colorDeg="{card.color.toString()}"/>
    {/each}
    {#if $popupActive}
    <Popup/>
    {/if}
    {#if $winScreenActive}
    <ExitScreen/>
    {/if}
</div>