<script>
    let dragover = false; 

</script>

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
    <p class="text-white font-bold">INVESTIGATE</p>
    <div class=" w-56 h-72 rounded-lg border-dashed border-4 border-color-white" class:dragover
    on:dragover|preventDefault="{() => {dragover = true; return false}}"
    on:dragenter|preventDefault="{() => {dragover = true; return false}}"
    on:dragleave="{() => {dragover = false}}"/>
    <p class="text-white font-bold"> WITH </p>
    <div class=" w-56 h-72 rounded-lg border-dashed border-4 border-color-white" />
</div>

<style>
    .dragover {
        border-color: blue !important;
    }
</style>