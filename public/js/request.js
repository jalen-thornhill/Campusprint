/*
 * File: request.js
 * Author: Jalen Thornhill
 * Created: 2026-09-28
 * Last Modified: 2026-09-28
 */
const printMessage = document.getElementById('requestMsg');
const  requestForm = document.getElementById('printRequest');


requestForm.addEventListener('submit', (event) => {
    event.preventDefault();


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

                    printMessage.textContent = `Request preview — not saved or submitted
                    Name: ${customerName}
                    Email: ${customerEmail}
                    Pages per copy: ${requestPages}
                    Copies: ${requestCopies}
                    Print color: ${colorLabel}
                    Sidedness: ${sidenessLabel}

                    Bring your document on a USB drive for assisted printing.`;
})


requestForm.addEventListener('input', () => {
    printMessage.textContent = "";
});

