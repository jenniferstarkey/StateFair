// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js"
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { ShowTicketHolders } from "./sideshows/ShowTicketHolder.js";
import { PackageTicketHolder } from "./FullPackage.js";
TicketBooth();

RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
ShowTicketHolders();
PackageTicketHolder();