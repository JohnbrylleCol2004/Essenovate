const images = document.querySelectorAll('.carousel-image');
const aboutTitle = document.getElementById('about-title');
const aboutDesc = document.getElementById('about-description');
const personName = document.getElementById('person-name');
const personAge = document.getElementById('person-age');
const personEmail = document.getElementById('person-email');

// Social links
const facebookLink = document.getElementById('facebook-link');
const instagramLink = document.getElementById('instagram-link');
const githubLink = document.getElementById('github-link');
const linkedinLink = document.getElementById('linkedin-link');

const data = [
    {
        title: "About Me",
        description: "Lorem ipsum for col.jpg...",
        name: "John Brylle Col",
        age: "30",
        email: "col@example.com",
        social: {
            facebook: "https://www.facebook.com/jeybi.col",
        }
    },
    {
        title: "About Me",
        description: "A dedicated and passionate programmer constantly exploring new ways to create impactful applications. As a second-year IT student at FEU Institute of Technology, I’ve been honing my skills in software development, web design, and system architecture. I take pride in writing clean, efficient code and enjoy turning ideas into fully functional, user-friendly solutions.",
        name: "Don Zaimone Miranda",
        age: "28",
        email: "zai@example.com",
        social: {
            facebook: "https://www.facebook.com/profile.php?id=100042834517769",
        }
    },
    {
        title: "About Me",
        description: "An  aspiring backend developer from FEU Tech, currently in my 2nd year of IT. I love solving complex problems and thrive on challenges, especially in backend development and web design. Optimizing website functionality and writing clean, efficient code are my passions. I continuously learn new technologies to improve my skills. My goal is to build user-friendly websites and functional systems that solve users' problems.",
        name: "Jethro Wang",
        age: "32",
        email: "jethro@example.com",
        social: {
            facebook: "https://www.facebook.com/jethro.wang.94",
            instagram: "https://www.instagram.com/jethro.wang.94?igsh=MWp6bjhyOGJ2OXhnZQ==",
        }
    }
];

let currentIndex = 0;

function updateContent(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));

    aboutTitle.textContent = data[index].title;
    aboutDesc.textContent = data[index].description;
    personName.textContent = data[index].name;
    personAge.textContent = data[index].age;
    personEmail.textContent = data[index].email;

    // Update social links
    facebookLink.href = data[index].social.facebook;
    instagramLink.href = data[index].social.instagram;
    githubLink.href = data[index].social.github;
    linkedinLink.href = data[index].social.linkedin;
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateContent(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateContent(currentIndex);
}


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


function goToCredits() {
    window.location.href = "credits.html"; // Change this to the actual credits page URL
}

function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000);
}

