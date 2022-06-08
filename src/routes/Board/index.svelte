<script>
import Card from "$lib/components/card.svelte";
import Investigate from "$lib/components/investigate.svelte";
import Popup from "$lib/components/popup.svelte";
import { popupActive } from "$lib/stores/data";


</script>

<div class="bg-slate-400 w-full h-[93%] overflow-hidden relative" id="board">
    <Investigate/>
    <Card/>
    <Card/>
    <Card/>
    {#if $popupActive}
    <Popup/>
    {/if}
</div>