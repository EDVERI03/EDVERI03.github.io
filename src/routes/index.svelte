<script>
import Card from "$lib/components/card.svelte";
import Investigate from "$lib/components/investigate.svelte";
import Popup from "$lib/components/popup.svelte";


</script>

<main class="bg-slate-400 w-screen h-screen overflow-hidden" id="board">
    <Investigate/>
    <Card/>
    <Card/>
    <Card/>
    <Popup/>
</main>