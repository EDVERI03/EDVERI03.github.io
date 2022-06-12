<script>
import CardSlot from "./cardSlot.svelte";
import {name, icon, win, winScreenActive} from "$lib/stores/data";
import { cards } from "$lib/data/cards";

function handleClick() {
    //Check if slot is full
    const slot = document.getElementById("prosecuteBox").querySelector(".card-slot");
    if (slot.childElementCount == 1) {
        //Display information
        //Depending on if "guilty" is true or not, display different information
        // @ts-ignore
        let card = slot.childNodes[0].id;
        let index = cards.findIndex((e) => e.name == card);
        if (cards[index].guilty) {
            $icon = cards[index].icon;
            $win = true;
            $winScreenActive = true;
        } else {
            $icon = cards[index].icon;
            $win = false;
            $winScreenActive = true;
        }
    }
}
</script>

<div class="text-center rounded-lg border-dashed border-4 border-color-white p-10" id="prosecuteBox">
    <p class="text-white font-bold uppercase select-none">Prosecute</p>
    <CardSlot/>
    <button class="px-4 py-2 rounded-lg bg-slate-500 text-white uppercase self-center font-bold hover:bg-slate-600 mt-4 select-none" on:click="{handleClick}">Commit</button>
</div>