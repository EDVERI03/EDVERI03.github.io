<script>

</script>

<div id="PUoverlay" class="fixed w-screen h-screen" style="background-color: rgba(0,0,0,0.5);">
    <div id="PUwindow" class="absolute inset-1/4 bg-white rounded-xl w-1/2 h-1/2" on:click="{() => {console.log("a")}}">
        <button class="absolute top-3 right-3 hover:bg-slate-100 rounded-full p-2"> 
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path class="stroke-slate-400 stroke-2" d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
            </svg>
        </button>
        <div id="textbox" class="m-8">
            <h1 class="font-bold uppercase text-2xl text-slate-400">This is a header</h1>
            <hr class="border-t-4 border-dashed border-slate-400">
            <p>Lorem Ipsum text and stuff</p>
        </div>
    </div>
</div>