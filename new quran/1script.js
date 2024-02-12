
function toggleForm(formType) {
    document.querySelectorAll('.form-container').forEach(function(formContainer) {
      formContainer.style.display = 'none';
    });
  
    document.getElementById(`${formType}-form-container`).style.display = 'block';
  }
  
  function submitForm(formType) {
    alert(`Form submitted successfully! (${formType})`);
  }
















  function updateCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('currentTime').innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(updateCurrentTime, 1000); // Update every 1 second
  }

  function showPrayerTime(prayerName) {
    // Hardcoded prayer times (you should replace this with accurate prayer times)
    var prayerTimes = {
      Fajr: '5:30 AM',
      Dhuhr: '12:00 PM',
      Asr: '3:30 PM',
      Maghrib: '5:45 PM',
      Isha: '7:30 PM'
    };

    if (prayerTimes.hasOwnProperty(prayerName)) {
      alert(`Time for ${prayerName}: ${prayerTimes[prayerName]}`);
    } else {
      alert(`Invalid prayer name: ${prayerName}`);
    }
  }

  updateCurrentTime(); 

































// Add your custom JavaScript code here

document.addEventListener('DOMContentLoaded', function () {
    // Activate the custom carousel
    var myCarousel = new Carousel(document.getElementById('customCarousel'));
});

// Custom Carousel Class
class Carousel {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        // Initialize the carousel
        this.carousel = new bootstrap.Carousel(this.element, {
            interval: 3000, // Set your desired interval in milliseconds (3 seconds in this example)
            pause: 'hover'
        });

        // Add event listeners for next and previous buttons
        this.element.querySelector('.carousel-control-next').addEventListener('click', () => this.next());
        this.element.querySelector('.carousel-control-prev').addEventListener('click', () => this.prev());
    }

    next() {
        // Move to the next slide
        this.carousel.next();
        // Reset the interval to prevent conflicting with automatic sliding
        this.carousel.cycle();
    }

    prev() {
        // Move to the previous slide
        this.carousel.prev();
        // Reset the interval to prevent conflicting with automatic sliding
        this.carousel.cycle();
    }
}















// Function to generate random numbers for demonstration purposes
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to update the statistics every second
function updateStatistics() {
  const statsContainer = document.getElementById('statsContainer');

  // Clear previous content
  statsContainer.innerHTML = '';

  // Sample statistics
  const statistics = [
    { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2', label: 'Downloads' },
    { icon: 'M17 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75', label: 'Users' },
    { icon: 'M3 18v-6a9 9 0 0118 0v6', label: 'Files' },
    { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Places' }
  ];

  // Insert dynamically updated cards
  statistics.forEach(stat => {
    const card = document.createElement('div');
    card.classList.add('p-4', 'md:w-1/4', 'sm:w-1/2', 'w-full');

    const innerCard = document.createElement('div');
    innerCard.classList.add('border-2', 'border-gray-200', 'px-4', 'py-6', 'rounded-lg');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');


    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('stroke-width', '2');
    svg.classList.add('text-red-500', 'w-12', 'h-12', 'mb-3', 'inline-block');
    svg.innerHTML = `<path d="${stat.icon}"></path>`;

    const h2 = document.createElement('h2');
    h2.classList.add('title-font', 'font-medium', 'text-3xl', 'text-gray-200');
    h2.textContent = getRandomNumber(1,99999);

    const p = document.createElement('p');
    p.classList.add('leading-relaxed');
    p.textContent = stat.label;

    innerCard.appendChild(svg);
    innerCard.appendChild(h2);
    innerCard.appendChild(p);
    card.appendChild(innerCard);
    statsContainer.appendChild(card);
  });
}

// Update statistics every second
setInterval(updateStatistics, 1000);

// Initial update
updateStatistics();



























// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Find the contact support button
  const contactButton = document.querySelector("#contactSupportButton");

  // Add a click event listener to the button
  contactButton.addEventListener("click", function () {
      // You can replace this with your actual contact support functionality
      alert("Contact support functionality will be implemented here!");
  });

  // Add a hover effect to the button
  contactButton.addEventListener("mouseenter", function () {
      contactButton.classList.add("hover:bg-gray-200");
  });

  // Remove hover effect when the mouse leaves the button
  contactButton.addEventListener("mouseleave", function () {
      contactButton.classList.remove("hover:bg-gray-200");
  });
});























// script.js

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
}

function showSignupForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  // Find the login and signup forms
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // Add event listener to prevent form submission (for demonstration purposes)
  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Add your login logic here
      alert("Login functionality will be implemented here!");
  });

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Add your signup logic here
      alert("Signup functionality will be implemented here!");
  });
});





























document.addEventListener('DOMContentLoaded', function () {
  // Sample blog data
  const blogs = [
      { title: "Learn Quranic Arabic", description: 
      "Explore the beauty of Quranic Arabic and enhance your understanding.", },
      { title: "Tajweed Basics", description: "Master the fundamentals of Tajweed to recite the Quran with precision.", },
      { title: "Quran Memorization Tips", description: "Discover effective strategies for memorizing verses from the Quran.", },
      { title: "Islamic History", description: "Uncover the rich history of Islam and its impact on the world.", },
      { title: "Fiqh Made Easy", description: "Simplify complex Fiqh concepts to strengthen your Islamic knowledge.", },
      { title: "Prophet's Stories", description: "Immerse yourself in the stories of Prophet Muhammad (PBUH) and draw lessons for life.", },
      { title: "Daily Duas", description: "Explore powerful daily supplications and their significance in Islam.", },
      { title: "Understanding Hadith", description: "Delve into the science of Hadith and grasp the wisdom behind the sayings of Prophet Muhammad (PBUH).", },
      { title: "Islamic Ethics", description: "Learn about the ethical principles that guide Islamic behavior and interactions.", },
      { title: "Women in Islam", description: "Discover the role and status of women in Islam, addressing common misconceptions.", },
      { title: "Islamic Finance", description: "Understand the principles of Islamic finance and its relevance in modern times.", },
      { title: "The Journey of Hajj", description: "Follow the steps and rituals of the sacred pilgrimage of Hajj and its spiritual significance.", }
  ];

  const blogCardsContainer = document.getElementById('blogCardsContainer');

  // Dynamically create blog cards
  blogs.forEach(blog => {
      const blogCard = document.createElement('div');
      blogCard.classList.add('blog-card');

      blogCard.innerHTML = `
          <h2>${blog.title}</h2>
          <p>${blog.description}</p>
          <button onclick="readMore('${blog.title}')">Read More</button>
      `;

      blogCardsContainer.appendChild(blogCard);
  });
});

function readMore(title) {
  // Add your logic for handling 'Read More' button click
  alert(`Read more clicked for ${title}`);
}


















