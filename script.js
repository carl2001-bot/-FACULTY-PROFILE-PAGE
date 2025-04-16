// Faculty data array
const facultyData = [
    {
        name: "Dr. Amina Odhiambo",
        title: "Senior Lecturer, Computer Science",
        email: "amina.odhiambo@usiu.ac.ke",
        researchInterests: ["Artificial Intelligence", "Digital Health", "Human-Computer Interaction"],
        imageAlt: "Portrait of Dr. Amina Odhiambo"
    },
    {
        name: "Prof. James K. Njoroge",
        title: "Associate Professor, Information Systems",
        email: "james.njoroge@usiu.ac.ke",
        researchInterests: ["ICT4D", "E-Governance", "Data Ethics"],
        imageAlt: "Portrait of Prof. James K. Njoroge"
    },
    {
        name: "Ms. Wanjiku Kamau",
        title: "Lecturer, Software Engineering",
        email: "wanjiku.kamau@usiu.ac.ke",
        researchInterests: ["Web Development", "UX Design", "DevOps"],
        imageAlt: "Portrait of Ms. Wanjiku Kamau"
    }
];

// Function to create faculty cards
function createFacultyCards() {
    const container = document.getElementById('facultyContainer');
    
    facultyData.forEach(faculty => {
        const card = document.createElement('article');
        card.className = 'faculty-card';
        
        // Create research interests list items
        const interestItems = faculty.researchInterests.map(interest => 
            `<li>${interest}</li>`
        ).join('');
        
        card.innerHTML = `
            <div class="profile-header">
                <div class="profile-image">
                    <img src="https://via.placeholder.com/150" alt="${faculty.imageAlt}">
                </div>
                <div class="profile-info">
                    <h2>${faculty.name}</h2>
                    <p class="title">${faculty.title}</p>
                </div>
            </div>
            <div class="profile-details">
                <div class="contact-info">
                    <a href="mailto:${faculty.email}" class="email-link">${faculty.email}</a>
                </div>
                <div class="research-interests">
                    <h3>Research Interests</h3>
                    <ul class="interest-tags">
                        ${interestItems}
                    </ul>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', createFacultyCards);
