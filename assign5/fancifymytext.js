// fancifymytext.js

function showAlert() {
    alert("Hello, world!");
}

// Bigger button click event handler
function biggerText() {
    // Access the text area and change font size
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Fancify radio button change event handler
function changeStyle() {
    // Access the text area
    var textArea = document.getElementById("textInput");

    // Check which radio button is selected
    if (document.getElementById("fancyRadio").checked) {
        // Set styles for FancyShmancy
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Reset styles for BoringBetty
        textArea.style.fontWeight = "normal";
        textArea.style.color = ""; // Reset to default
        textArea.style.textDecoration = "none"; // Reset to default
    }
}

// Moo button click event handler
function mooifyText() {
    // Access the text area and get its value
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
    }

    // Join the sentences and update the text area
    textArea.value = sentences.join(". ");
}
