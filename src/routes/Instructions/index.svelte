<script>

import CardSlot from "$lib/components/cardSlot.svelte";

</script>
<div class="bg-slate-200 w-3/4 m-auto flex flex-col items-center text-center min-h-[93%]">
    <h1 class="my-6 font-bold uppercase text-2xl text-slate-500">How to Play</h1>
    <hr class="border-t-4 border-dashed border-slate-100 w-full">
    <h1 class="my-6 font-bold uppercase text-2xl text-slate-500">Cards</h1>
    <div class="flex">
        <p class="ml-6">
            The cards in the game repressent different characters, three suspects and one victim. You can drag around cards with [LMB]. You can also right-click [RMB] a card which displays a description of the individual. Beyond this, if you 'slot' cards in the card slots (marked by a dashed, white border) which gives you more options to interact with the individuals. 
        </p>
        <img alt="card1" src="Portrait1.png" class="w-48 h-64 bg-white rounded-lg mx-6 hue-rotate-180 float-right mb-6">
    </div>
    <hr class="border-t-4 border-dashed border-slate-100 w-full">
    <h1 class="my-6 font-bold uppercase text-2xl text-slate-500">interrogate</h1>
    <p class="mx-6 mb-6">The interrogate slots let you hear what any suspect have to say about any other individual. This is your main tool for gathering information.</p>
    <hr class="border-t-4 border-dashed border-slate-100 w-full">
    <h1 class="my-6 font-bold uppercase text-2xl text-slate-500">Prosecute</h1>
    <p class="mx-6 mb-6">The prosecute slot should only be used when you believe you know who the murderer is, as you lose the game if you guess wrong. However, if you do get it right you will win the game. </p>
</div>