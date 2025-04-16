// Faculty data array with departments
const facultyData = [
    {
        name: "Dr. Amina Odhiambo",
        title: "Senior Lecturer",
        department: "Computer Science",
        email: "amina.odhiambo@usiu.ac.ke",
        phone: "+254 730 116 001",
        office: "SST Building, Room 205",
        researchInterests: ["Artificial Intelligence", "Digital Health", "Human-Computer Interaction"],
        imageAlt: "Portrait of Dr. Amina Odhiambo",
        departmentCode: "cs"
    },
    {
        name: "Prof. James K. Njoroge",
        title: "Associate Professor",
        department: "Information Systems",
        email: "james.njoroge@usiu.ac.ke",
        phone: "+254 730 116 002",
        office: "SST Building, Room 310",
        researchInterests: ["ICT4D", "E-Governance", "Data Ethics"],
        imageAlt: "Portrait of Prof. James K. Njoroge",
        departmentCode: "is"
    },
    {
        name: "Ms. Wanjiku Kamau",
        title: "Lecturer",
        department: "Software Engineering",
        email: "wanjiku.kamau@usiu.ac.ke",
        phone: "+254 730 116 003",
        office: "SST Building, Room 112",
        researchInterests: ["Web Development", "UX Design", "DevOps"],
        imageAlt: "Portrait of Ms. Wanjiku Kamau",
        departmentCode: "se"
    },
    {
        name: "Dr. Samuel Mwangi",
        title: "Associate Professor",
        department: "Information Technology",
        email: "samuel.mwangi@usiu.ac.ke",
        phone: "+254 730 116 004",
        office: "SST Building, Room 215",
        researchInterests: ["Cybersecurity", "Network Systems", "Cloud Computing"],
        imageAlt: "Portrait of Dr. Samuel Mwangi",
        departmentCode: "it"
    }
];

// Function to create faculty cards
function createFacultyCards(filterDepartment = 'all') {
    const container = document.getElementById('facultyContainer');
    container.innerHTML = '';
    
    facultyData.forEach(faculty => {
        if (filterDepartment === 'all' || faculty.departmentCode === filterDepartment) {
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
                        <p class="department">${faculty.department}</p>
                    </div>
                </div>
                <div class="profile-details">
                    <div class="contact-info">
                        <p><i class="fas fa-envelope"></i> <a href="mailto:${faculty.email}" class="email-link">${faculty.email}</a></p>
                        <p><i class="fas fa-phone"></i> ${faculty.phone}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${faculty.office}</p>
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
        }
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFacultyCards();
    
    // Add event listener for department filter
    const departmentSelect = document.getElementById('department-select');
    departmentSelect.addEventListener('change', (e) => {
        createFacultyCards(e.target.value);
    });
});
