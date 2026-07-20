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
<!-- GOOGLE MAP -->

<section id="map" class="section">

<div class="container">

<h2 class="section-title">📍 Our Location</h2>

<div class="card">

<iframe
src="https://www.google.com/maps/embed?pb="
width="100%"
height="350"
style="border:0;border-radius:10px;"
loading="lazy">
</iframe>

</div>

</div>

</section>

<!-- PAYMENT -->

<section id="payment" class="section">

<div class="container">

<h2 class="section-title">💳 Payment Details</h2>

<div class="card">

<h3>Bank Transfer</h3>

<p>Account Name : Dhanalakshmi Parcel Service</p>

<p>Bank : __________</p>

<p>A/C No : __________</p>

<p>IFSC : __________</p>

<br>

<h3>UPI / GPay</h3>

<p>8110070409</p>

<img src="qr.png" width="220" alt="QR Code">

</div>

</div>

</section>

<!-- CUSTOMER REVIEWS -->

<section id="reviews" class="section">

<div class="container">

<h2 class="section-title">⭐ Customer Reviews</h2>

<div class="card">

⭐⭐⭐⭐⭐ Excellent Service

</div>

<div class="card">

⭐⭐⭐⭐⭐ Fast Delivery

</div>

<div class="card">

⭐⭐⭐⭐⭐ Safe Transport

</div>

</div>

</section>

<!-- CONTACT -->

<section id="contact" class="section">

<div class="container">

<h2 class="section-title">☎ Contact Us</h2>

<div class="card">

<p>📱 8110070409</p>

<p>📱 8300061569</p>

<p>📍 Erode, Tamil Nadu</p>

<p>📧 dhanalakshmiparcelservice@gmail.com</p>

<a href="https://wa.me/918110070409" class="btn">
WhatsApp Now
</a>

</div>

</div>

</section>

<!-- TERMS -->

<section id="terms" class="section">

<div class="container">

<h2 class="section-title">📜 Terms & Conditions</h2>

<div class="card">

<h3>தமிழ்</h3>

<p>• சரக்குகள் சரியான முகவரியுடன் ஒப்படைக்கப்பட வேண்டும்.</p>

<p>• தடை செய்யப்பட்ட பொருட்கள் ஏற்றுக் கொள்ளப்படாது.</p>

<p>• இயற்கை பேரிடர்களால் ஏற்படும் தாமதத்திற்கு நிறுவனம் பொறுப்பல்ல.</p>

<hr>

<h3>English</h3>

<p>• Goods must be packed properly.</p>

<p>• Illegal materials are not accepted.</p>

<p>• Delivery time may vary due to unavoidable reasons.</p>

<hr>

<h3>हिन्दी</h3>

<p>• सामान सही पैकिंग के साथ भेजें।</p>

<p>• प्रतिबंधित वस्तुएँ स्वीकार नहीं की जाएंगी।</p>

<p>• प्राकृतिक कारणों से होने वाली देरी के लिए कंपनी जिम्मेदार नहीं होगी।</p>

</div>

</div>

</section>
