const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event =>{
    const customEvent = event.target
        if(customEvent.id === "rideTicket"){
            const rideEvent = new CustomEvent("ridePurchased", {
            })
            eventHub.dispatchEvent(rideEvent)
        }
    }
)

eventHub.addEventListener("click", event =>{
    const customEvent = event.target
    if( customEvent.is === "foodTicket"){
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

