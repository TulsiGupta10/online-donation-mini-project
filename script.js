// Function to handle "Donate Now" button click
function donateNow() {
    // Replace 'donationPage.html' with the actual URL or path to your donation page
    window.location.href = 'donationPage.html';
}



function showContent(tab) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected tab
    document.getElementById(tab).classList.add('active');
    event.target.classList.add('active');
}
// Toggle FAQ answers
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});
// Subscription form submission
document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const email = document.querySelector('.subscribe-input').value;
    alert(`Thank you for subscribing with: ${email}`);
    document.querySelector('.subscribe-input').value = ''; // Clear input
});
// Add click listeners to the boxes
// Adding click listeners to log box interactions
document.querySelectorAll('.info-box').forEach(box => {
    box.addEventListener('click', () => {
        console.log(`Navigated to: ${box.href}`);
    });
});
// Logging which category was clicked
document.querySelectorAll('.category-box').forEach(box => {
    box.addEventListener('click', () => {
        console.log(`Navigated to: ${box.href}`);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const donors = [
        { name: "John Doe", amount: "$10,000", img: "donor1.jpg" },
        { name: "Jane Smith", amount: "$8,500", img: "donor2.jpg" },
        { name: "Alice Johnson", amount: "$7,200", img: "donor3.jpg" },
        { name: "Mark Brown", amount: "$6,800", img: "donor4.jpg" },
        { name: "Emily White", amount: "$5,500", img: "donor5.jpg" }
    ];

    const donorContainer = document.querySelector(".donor-container");

    donors.forEach(donor => {
        const donorBox = document.createElement("div");
        donorBox.classList.add("donor-box");

        donorBox.innerHTML = `
            <img src="${donor.img}" alt="${donor.name}" class="donor-image">
            <h3>${donor.name}</h3>
            <p>Donated: ${donor.amount}</p>
        `;

        donorContainer.appendChild(donorBox);
    });
});




