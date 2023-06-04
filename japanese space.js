function generateName() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value;
    var spacedName = addSpace(name);
    var output = document.getElementById("output");
    output.textContent = "Name with spaces: " + spacedName;
    
    var copyButton = document.getElementById("copyButton");
    if (name.length > 0) {
        copyButton.style.display = "block";
    } else {
        copyButton.style.display = "none";
    }
}

    function addSpace(name) {
        var spacedName = name.split('').join('　');
        return spacedName;
    }

    function copyText() {
var output = document.getElementById("output");
var textToCopy = output.textContent.replace("Name with spaces: ", "");

// Create a temporary input field
var tempInput = document.createElement("input");
tempInput.setAttribute("value", textToCopy);
document.body.appendChild(tempInput);

// Select and copy the text
tempInput.select();
document.execCommand("copy");

// Remove the temporary input field
document.body.removeChild(tempInput);

// Show the message box
var messageBox = document.getElementById("messageBox");
messageBox.innerHTML = "Copied:<br>" + textToCopy;
messageBox.style.display = "block";

// Hide the message box after 2 seconds
setTimeout(function() {
    messageBox.style.display = "none";
}, 2000);
}
