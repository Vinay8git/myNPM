import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_XANr9x3EGw99lUFeGeqEvqKbkckf7DaLUWsBQcK8');

// getLatestExchange("USD", "INR", 5);
export async function getLatestExchange(fromCurrency, toCurrency, units){
    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    })
    const multiplier = response.data[toCurrency];
    // console.log(multiplier);
    return multiplier*units;
}