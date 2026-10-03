/*
 * File: request.js
 * Author: Jalen Thornhill
 * Created: 2026-09-28
 * Last Modified: 2026-09-28
 */
const printMessage = document.getElementById('requestMsg');
const  requestForm = document.getElementById('printRequest');
const submitButton = requestForm.querySelector('button[type="submit"]');
let isSubmitting = false;


requestForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if(isSubmitting) return;

    const customerName = document.getElementById("customerName").value.trim();
    if(customerName === ""){
        printMessage.textContent = "Enter a name not just spaces, no name with only spaces please.";
        return;
    }
    const customerEmail = document.getElementById('customerEmail').value.trim();

    
    
    // get the values from the form inputs and converts pages and copies to numbers
     const requestPages = Number(document.getElementById('requestPages').value);
    const requestCopies = Number(document.getElementById('requestCopies').value);
    const requestColor = document.getElementById('requestColor').value;
    const requestSideness = document.getElementById('requestSideness').value;

    let colorLabel = "Black-and-white";
    if(requestColor ==="color") colorLabel = 'color';










    //validation checks

    // check for valid number of pages and copies
    if (!Number.isInteger(requestPages) || requestPages < 1 || !Number.isInteger(requestCopies) || requestCopies < 1) {
        printMessage.textContent = "Enter whole numbers greater than zero for pages and copies.";
        return;
    }


    // check for priniting colo
    if (requestColor !== "bw" && requestColor !== "color") {
        printMessage.textContent = "Choose a valid printing color.";
        return;
    }



    let sidenessLabel = "single-sided"
    if(requestSideness === 'double')  sidenessLabel = 'double-sided';
        // check for printing side
    if (requestSideness !== "single" && requestSideness !== "double") {
        printMessage.textContent = "Choose a valid printing side option.";
        return;
    }


    const details = {
    customerName: customerName,
    customerEmail: customerEmail,
    requestPages: requestPages,
    requestCopies: requestCopies,
    requestColor: requestColor,
    requestSideness: requestSideness
};

    isSubmitting = true;
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
    printMessage.textContent= "Submitting your request...";
try {
    const response = await fetch("/api/request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    });

    const result = await response.json();

    if (!response.ok) {
        printMessage.textContent = result.message;
        return;
    }





    const totalBBD = result.totalCost / 100;


    printMessage.textContent= `request saved
    request number: ${result.requestId}
    estimated cost: ${totalBBD.toFixed(2)} BBD
    bring your document on the USB drive for assisted printing.`;
    
} catch (error) {
    printMessage.textContent =
        "Could not confirm submission. Check that the server is running.";
} finally{
    isSubmitting = false;
    submitButton.disabled = false;
    submitButton.textContent = "Submit Request";
}
})


requestForm.addEventListener('input', () => {

    if(!isSubmitting)  printMessage.textContent = "";
    
});

