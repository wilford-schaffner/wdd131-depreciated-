document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.write(currentYear);
});

document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    var lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = "Last modified: " + lastModified;
    }
});