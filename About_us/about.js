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
        name: "Col Developer",
        age: "30",
        email: "col@example.com",
        social: {
            facebook: "https://www.facebook.com/jeybi.col",
        }
    },
    {
        title: "About Me",
        description: "Lorem ipsum for zai.jpg...",
        name: "Zai Developer",
        age: "28",
        email: "zai@example.com",
        social: {
            facebook: "https://www.facebook.com/profile.php?id=100042834517769",
        }
    },
    {
        title: "About Me",
        description: "Lorem ipsum for jethro.jpg...",
        name: "Jethro Developer",
        age: "32",
        email: "jethro@example.com",
        social: {
            facebook: "https://www.facebook.com/jethro.wang.94",
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

function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 3000);
}

