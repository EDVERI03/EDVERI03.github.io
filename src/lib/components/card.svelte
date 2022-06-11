<script id="appendable">
    import { popupActive, name, description, icon, color } from "$lib/stores/data";
    //For displaying card-specific information

    export let cardName = "fellow";
    export let imageURL = ""; 
    export let cardDescription ="exists...";
    export let colorDeg = "90"

    //For real-time dynamic repositioning of elements  
    export let posX = 40;
    export let posY = 40;

    let position = "absolute"
    let transition = "unset"

    let follow = false;

    function HandleMovement(event) {
        const cardRect = this.getBoundingClientRect();
        //Move element
        if (follow) {
            posX = event.clientX - cardRect.width/2;
            posY = event.clientY - cardRect.height/2 -40;
        }
    }

    function HandleDrop(duration) {
        const cardRect = this.getBoundingClientRect();
        const cardCenter = {"x": (cardRect.x + cardRect.width / 2), "y": (cardRect.y + cardRect.height / 2)}
        follow = false

        //For putting card in slot (if possible)
        const Slots = document.querySelectorAll("#card-slot"); 
        Slots.forEach((slot) => {
            //Check if card slot is available (empty)
            if (slot.childElementCount == 0) {
                //Check if there is a slot on drop location
                const slotRect = slot.getBoundingClientRect();
                if (slotRect.left < cardCenter.x && slotRect.right > cardCenter.x && slotRect.top < cardCenter.y && slotRect.bottom > cardCenter.y) {
                    //append card into slot
                    //animate card going into slot
                    const barRect = document.getElementById("navBar").getBoundingClientRect()
                    transition = `top 0.2s, left 0.2s`;
                    posX = slotRect.x + 4;
                    posY = slotRect.y - barRect.height + 4;
                    
                    setTimeout(() => {
                        position = "inherit";
                        slot.appendChild(this);
                        transition = "unset"
                    }, 200);
                }
            }
        }) 
    }

    function HandleLift() {
        follow = true

        //if card is in slot, free it
        const board = document.querySelector("#board");
        position = "absolute";
        board.appendChild(this);
    } 

    export function DisplayData() {
        $name = cardName;
        $icon = imageURL;
        $description = cardDescription;
        $color = colorDeg;
        $popupActive = true;
    }
</script>

<div class="w-48 h-64 bg-white rounded-lg hover:drop-shadow-xl bg-cover" id="{cardName}" 
style="left: {posX}px; top: {posY}px; background-image: url({imageURL}); filter: hue-rotate({colorDeg}deg); position:{position}; transition: {transition};" 
on:mousedown="{HandleLift}" 
on:mouseup="{HandleDrop}"
on:mouseleave="{() => {follow = false}}"
on:mousemove="{HandleMovement}"
on:contextmenu|preventDefault="{DisplayData}"
/>