/* ==========================
   DPS WEBSITE JAVASCRIPT
========================== */

// Loader
window.onload = function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.display = "none";
        }
    }, 1500);
};

// Side Menu
function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
}

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-320px";
}

// Route Search
function searchRoutes() {

    let input = document.getElementById("routeSearch");

    if (!input) return;

    let filter = input.value.toUpperCase();

    let cards = document.getElementsByClassName("route-card");

    for (let i = 0; i < cards.length; i++) {

        let txt = cards[i].innerText.toUpperCase();

        if (txt.indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// WhatsApp Booking
function sendWhatsApp() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let material = document.getElementById("material").value;
    let weight = document.getElementById("weight").value;
    let boxes = document.getElementById("boxes").value;
    let pickup = document.getElementById("pickup").value;
    let remarks = document.getElementById("remarks").value;

    let message =
`*Dhanalakshmi Parcel Service Enquiry*

👤 Name : ${name}

📱 Mobile : ${mobile}

📍 From : ${from}

🏁 To : ${to}

📦 Material : ${material}

⚖ Weight : ${weight}

📦 Boxes : ${boxes}

📅 Pickup Date : ${pickup}

📝 Remarks : ${remarks}`;

    window.open(
        "https://wa.me/918110070409?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}

// Truck Animation
const truck = document.querySelector(".truck-animation");

if (truck) {

    setInterval(() => {

        truck.style.transform = "translateX(100%)";

        setTimeout(() => {
            truck.style.transform = "translateX(-100%)";
        }, 5000);

    }, 6000);

}
