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
        const foodEvent = new CustomEvent("foodPurchased", {

        })
        eventHub.dispatchEvent(foodEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

