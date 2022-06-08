<script>
import { popupActive } from "$lib/stores/data";

    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis quam, sodales quis lectus ut, porta condimentum ipsum. 
    Nulla pulvinar augue sit amet venenatis ornare. Sed nibh magna, iaculis a odio sit amet, rhoncus ultricies erat. Aliquam hendrerit egestas mi at porta.
     Etiam iaculis eros non posuere semper. Vestibulum porttitor efficitur lacus, ac gravida nunc congue non. Nam mollis eget nulla id semper. Cras et maximus orci. 
     Sed congue luctus felis et aliquam. Vivamus tempor diam nec eros facilisis, in suscipit eros mollis. Mauris ipsum sapien,
      efficitur mattis venenatis eget, tristique ac magna. Nulla facilisi. Phasellus ultricies euismod leo vel finibus. Proin convallis consequat nulla a maximus.
       Morbi at ante lectus. Curabitur est nibh, maximus tincidunt urna a, bibendum gravida leo.`

       let imgsrc = "src/lib/assets/Portrait2.png"
</script>

<div id="PUoverlay" class="fixed w-screen h-screen" style="background-color: rgba(0,0,0,0.5);">
    <div id="PUwindow" class="absolute inset-1/4 bg-white rounded-xl w-1/2 min-h-[50%] h-fit">
        <button class="absolute top-3 right-3 hover:bg-slate-100 rounded-full p-2" on:click="{() => {$popupActive = false}}"> 
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path class="stroke-slate-400 stroke-2" d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
            </svg>
        </button>
        <div id="textbox" class="m-8">
            <h1 class="font-bold uppercase text-2xl text-slate-400">This is a header</h1>
            <hr class="border-t-4 border-dashed border-slate-400">
            <div class="flex mt-6">
                <p style="width: -webkit-fill-available;">{text}</p>
                <img src="{imgsrc}" alt="card" class="w-48 h-64 rounded-lg float-right ml-4">
            </div>
        </div>
    </div>
</div>