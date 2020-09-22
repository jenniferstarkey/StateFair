const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


//RIDE TICKET EVENT 
eventHub.addEventListener("click", event =>{
    const customEvent = event.target
        if(customEvent.id === "rideTicket"){
            const rideEvent = new CustomEvent("ridePurchased", {
            })
            numOfTix++
            buttonClick()
            eventHub.dispatchEvent(rideEvent)
        }
    }
)

//FOOD TICKET EVENT 
eventHub.addEventListener("click", event =>{
    const customEvent = event.target
    if( customEvent.id === "foodTicket"){
        const foodEvent = new CustomEvent("foodPurchased")
        numOfTix++
        buttonClick()
        eventHub.dispatchEvent(foodEvent)
    }
})

//GAME TICKET EVENT
eventHub.addEventListener("click", event =>{
    const customEvent = event.target
    if( customEvent.id === "gameTicket"){
        const gameEvent = new CustomEvent("gamePurchased")
        numOfTix++
        buttonClick()
        eventHub.dispatchEvent(gameEvent)
    }
})
//SIDESHOW TICKET EVENT

eventHub.addEventListener("click", event =>{
    const customEvent =event.target
    if(customEvent.id ==="sideshowTicket"){
        const showEvent = new CustomEvent("showPurchased", {
    })
        numOfTix++
        buttonClick()
            eventHub.dispatchEvent(showEvent)
            }
})


//FULL PACKAGE EVENT


eventHub.addEventListener("click", event => {
    const customEvent = event.target 
    if( customEvent.id === "pkgTicket"){
        const pkgEvent = new CustomEvent("pkgPurchased",{
        })
        numOfTix++
        buttonClick()
        eventHub.dispatchEvent(pkgEvent)
        // console.log("package Tixxx")
    }
})
const clickTarget = document.querySelector(".customers")

let numOfTix = 0
export const buttonClick = () =>{
    clickTarget.innerHTML = `Total Purchased: ${numOfTix}`
}

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
