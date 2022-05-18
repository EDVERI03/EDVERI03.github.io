<script>
    //For displaying card-specific information

    let name = "the rock";
    let imageURL = "https://upload.wikimedia.org/wikipedia/commons/3/32/WWF_RAW_2001-10-15_The_Rock_at_ringside.jpg"; 
    let colorDeg = 180 

    //For real-time dynamic repositioning of elements  
    let posX = 40
    let posY = 40

    let follow = false;

    function HandleMovement(event) {
        if (follow) {
            posX = event.clientX - 96;
            posY = event.clientY - 128;
        }
    }
</script>

<div class="absolute w-48 h-64 bg-white rounded-lg hover:drop-shadow-xl hover:z-index-10 bg-cover" 
draggable="true"
style="left: {posX}px; top: {posY}px; background-image: url({imageURL}); filter: hue-rotate({colorDeg}deg);" 
on:mousedown="{() => {follow = true}}" 
on:dragstart|preventDefault="{() => {return false;}}"
on:dragend|preventDefault="{() => {return false;}}"
on:drag="{() => {return null;}}"
on:mouseup="{() => {follow = false}}"
on:mouseleave="{() => {follow = false}}"
on:mousemove="{HandleMovement}"/>

