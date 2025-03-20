document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.card');
        const details = card.querySelector('.details');

        if (details.classList.contains('open')) {
            details.classList.remove('open');
            this.textContent = 'Read More';
            card.classList.remove('expanded');
        } else {
            // Close all other expanded cards before opening the new one
            document.querySelectorAll('.card.expanded').forEach(expandedCard => {
                expandedCard.classList.remove('expanded');
                expandedCard.querySelector('.details').classList.remove('open');
                expandedCard.querySelector('.toggle-button').textContent = 'Read More';
            });

            details.classList.add('open');
            this.textContent = 'Read Less';
            card.classList.add('expanded');

            // Ensure the card is fully visible
            setTimeout(() => {
                const cardBottom = card.getBoundingClientRect().bottom;
                const viewportHeight = window.innerHeight;
                
                if (cardBottom > viewportHeight) {
                    window.scrollTo({
                        top: card.offsetTop - 50, // Adjust scrolling to bring it fully into view
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    });
});

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
    headerbar.style.right = '0';
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';  // Hide the cross icon when clicked
    headerbar.style.right = '-100%'; // Slide out to the right
});

function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000);
}

// Function to toggle image visibility
function toggleImage(imageId) {
    var imageContainer = document.getElementById(imageId);
    imageContainer.style.display = (imageContainer.style.display === "none" || imageContainer.style.display === "") 
        ? "block" 
        : "none";
}

// Function to toggle image visibility
function toggleImage(imageId) {
    var imageContainer = document.getElementById(imageId);
    imageContainer.style.display = (imageContainer.style.display === "none" || imageContainer.style.display === "") 
        ? "block" 
        : "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".clickable-text").forEach(item => {
        item.addEventListener("click", function () {
            var imageContainer = this.nextElementSibling; // Get the next sibling div

            if (imageContainer && imageContainer.classList.contains("image-container")) {
                var isVisible = imageContainer.style.display === "block";

                // Hide all images first
                document.querySelectorAll(".image-container").forEach(container => {
                    container.style.display = "none";
                });

                // Show the clicked one if it wasn't visible
                imageContainer.style.display = isVisible ? "none" : "block";
            }
        });
    });
});
