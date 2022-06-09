<script>
import Card from "$lib/components/card.svelte";
import CardSlot from "$lib/components/cardSlot.svelte";
import Investigate from "$lib/components/investigate.svelte";
import Popup from "$lib/components/popup.svelte";
import { popupActive } from "$lib/stores/data";

const cards = [{"name":"Large Man", "icon":"src/lib/assets/Portrait2.png", "description":"This stone-cold fellow apparently worked as a geologist before hitting rock-bottom and ending up here. The two of you had a rocky start but he does appear somewhat trustworthy.", "position":1},
{"name":"(Almost) Nude Man", "icon":"src/lib/assets/Portrait1.png", "description":"This man wears only checker-print boxers and a pair of high-end sneakers. He appears relatively harmless. However, you do catch him staring at you from time to time, with his expression colored by a maddening ecstasy. His intentions are unknown to you, which you believe is for the better, as you wish to keep your sanity.", "position":2},
{"name":"All-seeing woman", "icon":"src/lib/assets/Portrait3.png", "description":"In the many hours you have spent in this god-forsaken hall, you have not once seen this woman blink. And worse yet, everytime you look at her she locks her eyes with you, staring beyond you, into you, as if her cold glare penetrates your very soul.", "position":3}]
</script>

<div class="bg-slate-400 w-full h-[93%] overflow-hidden relative" id="board">
    <Investigate/>
    {#each cards as card}
        <Card cardName="{card.name}" imageURL="{card.icon}" cardDescription="{card.description}" posY="{100 * card.position}"/>
    {/each}
    {#if $popupActive}
    <Popup/>
    {/if}
</div>