/*
 * File: calculator.js
 * Author: Jalen Thornhill
 * Created: 2026-09-26
 * Last Modified: 2026-09-26
 */


// these are the prices for the different printing options
const selfBwRate = 0.20;
const selfColorRate = 0.75;

const assistedBwRate = 0.25;
const assistedColorRate = 0.90;
const assistanceFee = 2.00;


const form = document.getElementById('priceCalculator'); // to get the form element by ID
const res = document.getElementById('priceRes'); // to get the result by ID



// this is what happens when someone presses the submit button on the form
form.addEventListener('submit', (event) => {

    event.preventDefault(); // prevents the form from submitting and refreshing the page




    // get the values from the form inputs and converts pages and copies to numbers
    const pages = Number(document.getElementById('pages').value);
    const copies = Number(document.getElementById('copies').value);
    const color = document.getElementById('print-color').value;
    const sideness = document.getElementById('sideness').value;
    const service = document.getElementById('service').value;




    //validation checks

    // check for valid number of pages and copies
    if (!Number.isInteger(pages) || pages < 1 || !Number.isInteger(copies) || copies < 1) {
        res.textContent = "Enter whole numbers greater than zero for pages and copies.";
        return;
    }


    // check for priniting colo
    if (color !== "bw" && color !== "color") {
        res.textContent = "Choose a valid printing color.";
        return;
    }

        // check for printing side
    if (sideness !== "single" && sideness !== "double") {
        res.textContent = "Choose a valid printing side option.";
        return;
    }

        // check for service option
    if (service !== "self" && service !== "assisted") {
        res.textContent = "Choose Self-Service or Assisted Printing.";
        return;
    }



    let rate;
    let fee = 0;

    if (service === "self") {
        if (color === "bw") rate = selfBwRate;

        else rate = selfColorRate;
    }
    if (service === "assisted") {
        if (color === "bw") rate = assistedBwRate;
        else rate = assistedColorRate;
        fee = assistanceFee;


    }
     
    // I am calculating the printed sides, sheets, and estimated price.
    const printedSides = pages * copies;
    let sheets = (sideness === 'double') ? Math.ceil(pages / 2) * copies : printedSides;
    let printingCharge = printedSides * rate;
    let total = printingCharge + fee;

    let serviceName = "Self-service campus printing";
    if (service === "assisted") {
        serviceName = "Assisted printing";
    }

    res.textContent = `Service: ${serviceName}
Printed sides: ${printedSides}
Paper sheets: ${sheets}
Sidedness: ${sideness === 'double' ? 'Double-sided' : 'Single-sided'}
Printing charge: BBD ${printingCharge.toFixed(2)}
Assistance fee: BBD ${fee.toFixed(2)}
Total estimate: BBD ${total.toFixed(2)}`;
});


form.addEventListener('input', () => {
    res.textContent = "";
});
