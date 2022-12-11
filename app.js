 function calculate() {
    // Get the values entered in the input fields
    var pounds = document.getElementById("pounds").value;
    var kilograms = document.getElementById("kilograms").value;

    // Check which input field has a value
    if (pounds) {
      // Convert pounds to kilograms
      kilograms = pounds * 0.45359237;
      // Set the value of the kilograms field
      document.getElementById("kilograms").value = kilograms.toFixed(2);
    } else if (kilograms) {
      // Convert kilograms to pounds
      pounds = kilograms / 0.45359237;
      // Set the value of the pounds field
      document.getElementById("pounds").value = pounds.toFixed(2);
    }
  }