import { getLatestExchange } from "vy-currency-cons";

getLatestExchange("USD", "INR", 5).then(response=>console.log(response));