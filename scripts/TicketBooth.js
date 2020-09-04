const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


//RIDE TICKET EVENT 
eventHub.addEventListener("click", event =>{
    const customEvent = event.target
        if(customEvent.id === "rideTicket"){
            const rideEvent = new CustomEvent("ridePurchased", {
            })
            eventHub.dispatchEvent(rideEvent)
        }
    }
)

//FOOD TICKET EVENT 
eventHub.addEventListener("click", event =>{
    const customEvent = event.target
    if( customEvent.id === "foodTicket"){
        const foodEvent = new CustomEvent("foodPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})

//GAME TICKET EVENT
eventHub.addEventListener("click", event =>{
    const customEvent = event.target
    if( customEvent.id === "gameTicket"){
        const gameEvent = new CustomEvent("gamePurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})
//SIDESHOW TICKET EVENT

eventHub.addEventListener("click", event =>{
    const customEvent =event.target
    if(customEvent.id ==="sideshowTicket"){
        const showEvent = new CustomEvent("showPurchased", {
                })
            eventHub.dispatchEvent(showEvent)
            }
})


//FULL PACKAGE EVENT


eventHub.addEventListener("click", event => {
    const customEvent = event.target 
    if( customEvent.id === "pkgTicket"){
        const pkgEvent = new CustomEvent("pkgPurchased",{

        })
        eventHub.dispatchEvent(pkgEvent)
        // console.log("package Tixxx")
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="pkgTicket">Full Package Ticket</button>


        </div>
    `
}

