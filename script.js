// Function to capitalize the input when the field loses focus
function capitalizeName() {
    // Get the input field by id
    const inputField = document.getElementById("fname");

    // Add an event listener for the "blur" event (loses focus)
    inputField.addEventListener("blur", function () {
        // Convert the content to uppercase
        inputField.value = inputField.value.toUpperCase();
    });
}

// Call the function to activate the behavior
capitalizeName();
