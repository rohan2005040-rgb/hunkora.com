document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("orderForm");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const address = document.getElementById("address").value;
            const product = document.getElementById("product").value;

            const message =
`🛒 Hunkora Banana Chips Order

👤 নাম: ${name}

📞 মোবাইল: ${phone}

📍 ঠিকানা: ${address}

📦 পণ্য: ${product}`;

            const whatsapp =
`https://wa.me/8801820232682?text=${encodeURIComponent(message)}`;

            window.open(whatsapp,"_blank");

        });

    }

});