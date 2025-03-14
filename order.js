// for order script
$(document).ready(function () {
    function updateTotal() {
        let total = 0;
        const serviceChargeRate = 0.05;
        const deliveryFeeRate = 0.10;

        $(".quantity").each(function () {
            let price = parseInt($(this).data("price")) || 0;
            let quantity = parseInt($(this).val()) || 0;
            let subtotal = price * quantity;

            $(this).closest("tr").find(".subtotal").text(`₱${subtotal}`);
            total += subtotal;
        });

        let serviceCharge = total * serviceChargeRate;
        let deliveryFee = total * deliveryFeeRate;
        let overall = total + serviceCharge + deliveryFee;

        $("#totalPrice").text(`₱${overall.toFixed(2)}`);
        $("#servicecharge").text(`₱${serviceCharge.toFixed(2)}`);
        $("#deliveryfee").text(`₱${deliveryFee.toFixed(2)}`);

        $("#paymentAmount").attr("placeholder", `Enter at least ₱${overall.toFixed(2)}`);
    }

    $(".quantity").on("input", updateTotal);
    updateTotal();

    $(".tab").on("click", function () {
        $(".tab, .category").removeClass("active");
        $(this).addClass("active");
        $("#" + $(this).data("category")).addClass("active");
    });

    $("#signupModal").hide();

    $("#orderForm").on("submit", function (event) {
        event.preventDefault();
        $("#signupModal").fadeIn(); 
    });

    $(".custom-close").on("click", function () {
        $("#signupModal").fadeOut();
    });

    $("#paymentAmount").on("input", function () {
        let total = parseFloat($("#totalPrice").text().replace("₱", "")) || 0;
        let payment = parseFloat($(this).val()) || 0;
        let change = payment - total;

        if (change >= 0) {
            $("#changeAmount").text(`₱${change.toFixed(2)}`);
            $("#error-msg").hide();
        } else {
            $("#changeAmount").text("₱0");
            $("#error-msg").show();
        }
    });

    $("#confirmOrder").on("click", function () {
        const email = $.trim($("#email").val());
        const password = $.trim($("#password").val());
        const homeAddress = $.trim($("#homeAddress").val());
        const payment = parseFloat($("#paymentAmount").val()) || 0;
        const total = parseFloat($("#totalPrice").text().replace("₱", "")) || 0;

        if (email === "" || password === "" || homeAddress === "") {
            alert("Please enter your email, password, and address to proceed.");
            return;
        }

        if (payment < total) {
            alert("⚠ Payment is insufficient! Please enter a valid amount.");
            return;
        }

        alert(`✅ Order confirmed!\nTotal: ${$("#totalPrice").text()}\nChange: ₱${(payment - total).toFixed(2)}\nEmail: ${email}\nAddress: ${homeAddress}`);

        $("#signupModal").fadeOut();

        $(".quantity").val(""); 
        $("#email, #password, #homeAddress, #paymentAmount").val(""); 
        $("#totalPrice, #servicecharge, #deliveryfee, #changeAmount").text("₱0.00"); 
        $(".subtotal").text("₱0");
        $("#error-msg").hide();
    });
});



// end of order script

document.addEventListener('DOMContentLoaded', () => {
    const searchicon1 = document.querySelector('#searchicon1');
    const searchicon2 = document.querySelector('#searchicon2');
    const searchinput1 = document.querySelector('#searchinput1');
    const searchinput2 = document.querySelector('#searchinput2');

    // Toggle visibility of search input when clicking on search icon 1
    searchicon1.addEventListener('click', function() {
        toggleSearch(searchinput1);
        // Hide the second search bar if it's visible
        if (searchinput2.style.display === 'flex') {
            searchinput2.style.display = 'none';
        }
    });

    // Toggle visibility of search input when clicking on search icon 2
    searchicon2.addEventListener('click', function() {
        toggleSearch(searchinput2);
        // Hide the first search bar if it's visible
        if (searchinput1.style.display === 'flex') {
            searchinput1.style.display = 'none';
        }
    });

    // Function to toggle the visibility of the search input
    function toggleSearch(searchInput) {
        if (searchInput.style.display === 'none' || searchInput.style.display === '') {
            searchInput.style.display = 'flex';
        } else {
            searchInput.style.display = 'none';
        }
    }
});

// Sidebar toggle
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block'; 
        cross.style.zIndex = '2';
    }, 200);
    headerbar.style.right = '0'; // Slide in from the right
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';  // Hide the cross icon when clicked
    headerbar.style.right = '-100%'; // Slide out to the right
});




document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('#slideContainer .slide');

    // Show the first slide initially
    showSlides();

    // Add click event to each slide to cycle to the next slide
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlides();
        });
    });

    function showSlides() {
        slides.forEach((slide, i) => {
            slide.style.display = i === slideIndex ? 'block' : 'none';
        });
    }
});


function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000); // 3-second delay
}