<script>
    import CardSlot from "./cardSlot.svelte";
    import {
        popupActive,
        description,
        icon,
        name,
        color,
    } from "$lib/stores/data";
    import { cards } from "$lib/data/cards";
    import { responses } from "$lib/data/responses";

    function handleClick() {
        //check if all slots are full.
        let slots = document
            .getElementById("investigateBox")
            .querySelectorAll(".card-slot");
        let isFull = true;
        slots.forEach((slot) => {
            if (slot.childElementCount <= 0) {
                isFull = false;
            }
        });
        if (isFull) {
            //Display data
            // @ts-ignore
            let firstCard = (slots[0].childNodes[0]).id;
            // @ts-ignore
            let secondCard = (slots[1].childNodes[0]).id;
            let indexOne = cards.findIndex((e) => e.name == firstCard);
            let indexTwo = cards.findIndex((e) => e.name == secondCard);

            $description = responses[`${cards[indexOne].name}->${cards[indexTwo].name}`];
            $name = cards[indexOne].name;
            $icon = cards[indexOne].icon;
            $color = cards[indexOne].color;
            $popupActive = true;
        }
    }
</script>

<div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
    id="investigateBox"
>
    <p class="text-white font-bold uppercase select-none">interrogate</p>
    <CardSlot />
    <p class="text-white font-bold uppercase select-none">about</p>
    <CardSlot />
    <button
        class="px-4 py-2 rounded-lg bg-slate-500 text-white uppercase self-center font-bold hover:bg-slate-600 mt-4 select-none"
        on:click={handleClick}>Investigate</button
    >
</div>
