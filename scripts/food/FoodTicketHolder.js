const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodPurchased", event => {
        contentTarget.innerHTML += 
        `<div class="person eater"></div>
        <div class="eater"></div> 
        <div class="person"></div>`
    
}
    )}
