document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.about-card', { opacity: 0, duration: 2, y: 30, stagger: 0.2 });
    gsap.from('.skill-card', { opacity: 0, duration: 2, y: 30, stagger: 0.2 });
    gsap.from('.project-card', { opacity: 0, duration: 2, y: 30, stagger: 0.2 });
    const form = document.getElementById('contact-form');
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const proficiencyBars = document.querySelectorAll('.proficiency-fill');
    const proficiencyTexts = document.querySelectorAll('.proficiency-text');
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    const githubLink = document.getElementById("github-link");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalTechnologies = document.getElementById("modal-technologies");
    const imageSlider = document.querySelector(".image-slider");
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    const textArray = [
        "I am a third year CS student...",
        "A Problem-Solver  for data...",
        "I always learn about tech...",
        "To help shape my world!"
    ];
    const typingTextElement = document.getElementById('typing-text');
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Typing speed in milliseconds
    const erasingSpeed = 50; // Erasing speed in milliseconds
    const delayBetweenTexts = 2000; // Delay before typing next text

    // Calculate navbar and hero dimensions accurately
    const navbarHeight = navbar.getBoundingClientRect().height;

    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 380) { 
          navbar.classList.remove("transparent");
          navbar.classList.add("solid");
        } else {
          navbar.classList.remove("solid");
          navbar.classList.add("transparent");
        }
      });

      const projectData = {
        "1": {
            title: "Properties in Greater Manchester Analysis",
            description: `
                <p>The purpose of this project was to analyze properties in the Greater Manchester area, uncovering the stories behind property prices in different neighborhoods. I aimed to provide insights into how the local economy and community influence property prices, beyond just the raw data.</p>
                <p><strong>Challenges Faced:</strong> Ensuring the dataset was representative of the entire Greater Manchester area.</p>
                <p><strong>Methods Used:</strong> Data collection, cleaning, and analysis using Python, Pandas, Jupyter, Seaborn, Matplotlib, and Tableau.</p>
                <p><strong>Results Obtained:</strong> Highlighted valuable insights into property prices, with opportunities to refine techniques and incorporate additional datasets for further enrichment.</p>
            `,
            technologies: "Python, Pandas, Jupyter, Seaborn, Matplotlib, Tableau",
            githubLink: "https://github.com/zackyboi2023/Project-3---Properties-in-Greater-Manchester-Analysis",
            images: [
                "Images//Projects//1//logos-gm.png",
                "Images//Projects//1//Code//1.png"
            ]
        },
        "2": {
            title: "Sentiment Analysis on PureGym Reviews",
            description: `
                <p>In this project, I applied Natural Language ToolKit techniques to analyze customer reviews from PureGym. The goal was to determine the overall sentiment of the reviews, categorizing them into positive, negative, or neutral sentiments.</p>
                <p><strong>Challenges Faced:</strong> Cleaning and pre-processing review data.</p>
                <p><strong>Methods Used:</strong> Sentiment analysis using Python, NLTK, Matplotlib, and Seaborn.</p>
                <p><strong>Results Obtained:</strong> Extracted meaningful insights about customer satisfaction and identified patterns in feedback.</p>
            `,
            technologies: "Python, NLTK, MatPlotLib, Seaborn, Jupyter Notebook",
            githubLink: "https://github.com/zackyboi2023/Sentiment-Analysis",
            images: [
                "Images//Projects//2//Code//1.png",
                "Images//Projects//2//Code//2.png"
            ]
        },
        "3": {
            title: "Project 3 - Salary Analysis Tool",
            description: `
                <p>In this project, I did a Exploratory Data Analysis on salaries that are based in San Francisco. The aim was to explore the different types of salaries in the most western part of the USA. </p>
                <p><strong>Challenges Faced:</strong> Collecting and processing data from various sources.</p>
                <p><strong>Methods Used:</strong> Data cleaning, analysis, and visualization using Python, Pandas, Matplotlib, Seaborn, SQL, and Jupyter Notebook.</p>
                <p><strong>Results Obtained:</strong> Revealed key insights into the distribution of salaries in San Francisco, highlighting significant patterns and anomalies.</p>
            `,
            technologies: "Python, Pandas, MatPlotLib, Seaborn, SQL, Jupyter Notebook",
            githubLink: "https://github.com/zackyboi2023/San-Francisco-Salaries",
            images: [
                "Images//Projects//3//Salaries.png",
                "Images//Projects//3//Code//1.png"
            ]
        },
        "4": {  
            title: "Analysing Customer Feedback about Starbucks",
            description: `
                <p>This project explores customer and team dynamics within Starbucks branches, utilizing a Kaggle dataset. It focuses on understanding the influence of customer preferences on store ambiance and the interactions between customers and staff.</p>
                <p><strong>Challenges Faced:</strong> Ensuring data representativeness and addressing anonymization issues.</p>
                <p><strong>Methods Used:</strong> Qualitative and quantitative analysis using Pandas, Numpy, Matplotlib, and Seaborn.</p>
                <p><strong>Results Obtained:</strong> Revealed trends and patterns in customer behavior, presented through clear visualizations.</p>
            `,
            technologies: "Pandas, Numpy, MatPlotLib, Seaborn",
            githubLink: "https://github.com/zackyboi2023/Project-2---Starbucks-Customer-Reviews",
            images: [
                "Images//Projects//4//Code//1.png",
                "Images//Projects//4//Code//2.png"
            ]
        }
    };
    
    // Function to open the modal with project details
    const openModal = (projectId) => {
        const project = projectData[projectId];
        if (!project) return;

        // Set modal content
        modalTitle.textContent = project.title;
        modalDescription.innerHTML = project.description;
        modalTechnologies.textContent = project.technologies;
        githubLink.href = project.githubLink;

        // Clear and populate image slider
        imageSlider.innerHTML = "";
        project.images.forEach(imageSrc => {
            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = `Project Image ${imageSrc}`;
            img.classList.add("slide-image");
            imageSlider.appendChild(img);
        });

        // Show the modal
        modal.style.display = "block";

        // Lock page scroll
        document.body.style.overflow = "hidden";
    };

    // Event listeners for each project view button
    viewProjectBtns.forEach(button => {
        button.addEventListener("click", function() {
            const projectId = this.getAttribute("data-project");
            openModal(projectId);
        });
    });

    // Close the modal when clicking the "X" button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";

        // Unlock page scroll
        document.body.style.overflow = "auto";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";

            // Unlock page scroll
            document.body.style.overflow = "auto";
        }
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });

    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            typingTextElement.textContent += textArray[textIndex][charIndex];
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(eraseText, delayBetweenTexts);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typingTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length; // Move to the next text
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start the typing effect
    setTimeout(typeText, delayBetweenTexts);

    proficiencyBars.forEach((bar, index) => {
        // Get the target width from the inline style
        const targetPercentage = parseFloat(
            bar.style.width.replace('%', '') // Extract number from '89%'
        );

        // Reset width to 0 for animation
        bar.style.width = '0';

        // Animate the bar to the target width
        setTimeout(() => {
            bar.style.width = `${targetPercentage}%`; // Animate the bar

            // Update the proficiency text
            if (proficiencyTexts[index]) {
                proficiencyTexts[index].textContent = `Proficiency: ${targetPercentage}%`;
            }
        }, 200);
    });
    
    proficiencyTexts.forEach((text, index) => {
        const bar = proficiencyBars[index];
        const percentage = bar.style.width; // This retrieves the width as set in CSS (e.g., '74%')
        text.textContent = `Proficiency: ${percentage}`;
    });

    form.addEventListener('submit', (event) => {
        // Prevent default submission for additional validation
        event.preventDefault();
    
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
    
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }
    
        // Check for a valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        // If valid, programmatically submit the form
        form.submit();
    });
    
    menuToggle.addEventListener('click', () => {
        console.log(navLinks.classList);  // Check which classes are applied
        navLinks.classList.toggle('active');
        console.log(navLinks.classList);  // Check again after toggle
      });

    navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') { // Check if a link is clicked
        navLinks.classList.remove('active'); // Hide the menu
    }
    });

});
