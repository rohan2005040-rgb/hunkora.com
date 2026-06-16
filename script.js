document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("orderForm");

    if (!form) {
        console.log("Form Not Found");
        return;
    }

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const address = document.getElementById("address").value.trim();
        const product = document.getElementById("product").value;

        const message =
`🛒 Hunkora Banana Chips Order

👤 নাম: ${name}

📞 মোবাইল: ${phone}

📍 ঠিকানা: ${address}

📦 পণ্য: ${product}`;

        const whatsappURL =
`https://wa.me/8801820232682?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });

});
