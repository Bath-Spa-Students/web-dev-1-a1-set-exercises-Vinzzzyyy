function calculateTotalPrice() {
    var Fuel = parseFloat(document.getElementById('Gasoline').value);
    var FuelType = document.getElementById('FuelType').value;
    var pricePerLiter;

    // Set the price for the gasoline calculator
    switch (FuelType) {
        case 'Premium': // Chooses the names for the gasolines that are used
            pricePerLiter = 73.50; // Sets the price for the different gasolines
            break;
        case 'Unleaded':
            pricePerLiter = 70.30;
            break;
        case 'Diesel':
            pricePerLiter = 75.80;
            break;
        case 'Special':
            pricePerLiter = 80.00;
            break;
        default:
            // Sets it so that the default price is 0 if nothing is chosen
            pricePerLiter = 0;
    }

    // Used to calculate the total price
    var cost = (Fuel * pricePerLiter).toFixed(2);

    // Shows the total price and the currency that is used
    document.getElementById('cost').innerHTML = 'Total price: ' + cost + 'PHP';
}