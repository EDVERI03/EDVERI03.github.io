<script id="appendable">
    //For displaying card-specific information

    let name = "the rock";
    let imageURL = "https://upload.wikimedia.org/wikipedia/commons/3/32/WWF_RAW_2001-10-15_The_Rock_at_ringside.jpg"; 
    let colorDeg = Math.floor(Math.random() * (360 + 1))

    //For real-time dynamic repositioning of elements  
    let posX = 40;
    let posY = 40;

    let position = "absolute"

    let follow = false;

    
    

    function HandleMovement(event) {
        const cardRect = this.getBoundingClientRect();
        //Move element
        if (follow) {
            posX = event.clientX - cardRect.width/2;
            posY = event.clientY - cardRect.height/2;
        }

        
    }

    function HandleDrop(event) {
        const cardRect = this.getBoundingClientRect();
        const cardCenter = {"x": (cardRect.x + cardRect.width / 2), "y": (cardRect.y + cardRect.height / 2)}
        follow = false

        //For putting card in slot (if possible)
        let Slots = document.querySelectorAll("#card-slot"); 
        console.log(Slots)
        Slots.forEach((slot) => {
            //Check if card slot is available (empty)
            if (slot.childElementCount == 0) {
                //Check if there is a slot on drop location
                const slotRect = slot.getBoundingClientRect();
                if (slotRect.left < cardCenter.x && slotRect.right > cardCenter.x && slotRect.top < cardCenter.y && slotRect.bottom > cardCenter.y) {
                    //append card into slot
                    position = "inherit"
                    slot.appendChild(this);
                    console.log("you did it")
                }
            }
        }) 

    }
    
</script>

<div class="w-48 h-64 bg-white rounded-lg hover:drop-shadow-xl hover:z-index-10 bg-cover" 
draggable="true"
style="left: {posX}px; top: {posY}px; background-image: url({imageURL}); filter: hue-rotate({colorDeg}deg); position:{position};" 
on:mousedown="{() => {follow = true}}" 
on:dragstart|preventDefault="{() => {return false;}}"
on:mouseup="{HandleDrop}"
on:mouseleave="{() => {follow = false}}"
on:mousemove="{HandleMovement}"
/>
