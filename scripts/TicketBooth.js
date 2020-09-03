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



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}

