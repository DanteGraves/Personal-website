// Typed.js configuration
var typed = new Typed(".text", {
    strings: ["Software Engineer", "Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to open tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// JavaScript to toggle tab container visibility
document.getElementById('more-about-me-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var tabContainer = document.getElementById('tab-container');
    if (tabContainer.style.display === 'none') {
        tabContainer.style.display = 'block';
    } else {
        tabContainer.style.display = 'none';
    }
});
