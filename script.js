
/* PROJECT DATA */

var projects = [
    {
        name: "Campus Connect",
        category: "Web Development",
        description: "A platform where college students can connect, share notes and discover campus events.",
        skills: "HTML, CSS, JavaScript",
        positions: 2,
        owner: "Rahul Sharma",
        contact: "rahul@example.com",
        roles: "Frontend Developer and Backend Developer"
    },

    {
        name: "Smart Attendance System",
        category: "AI / ML",
        description: "An attendance management system using facial recognition technology.",
        skills: "Python, OpenCV, ML",
        positions: 2,
        owner: "Ananya Verma",
        contact: "ananya@example.com",
        roles: "Python Developer and ML Developer"
    },

    {
        name: "Smart Home Automation",
        category: "IoT",
        description: "A home automation system that controls electrical devices through mobile applications.",
        skills: "Arduino, IoT, C++",
        positions: 1,
        owner: "Arjun Mehta",
        contact: "arjun@example.com",
        roles: "IoT Developer"
    },

    {
        name: "Student Expense Tracker",
        category: "App Development",
        description: "A mobile application to help students manage their daily expenses.",
        skills: "Java, Firebase, UI Design",
        positions: 2,
        owner: "Priya Singh",
        contact: "priya@example.com",
        roles: "Android Developer and UI Designer"
    },

    {
        name: "Online Learning Portal",
        category: "Web Development",
        description: "A website where students can access learning materials, quizzes and educational resources.",
        skills: "HTML, CSS, Python",
        positions: 1,
        owner: "Karan Malhotra",
        contact: "karan@example.com",
        roles: "Backend Developer"
    },

    {
        name: "AI Study Assistant",
        category: "AI / ML",
        description: "An AI-powered study assistant that helps students organize their study materials.",
        skills: "Python, AI, Flask",
        positions: 2,
        owner: "Sneha Gupta",
        contact: "sneha@example.com",
        roles: "AI Developer and Frontend Developer"
    }
];


/* STUDENT DATA */

var students = [
    {
        name: "Rahul Sharma",
        role: "Frontend Developer",
        college: "B.Tech CSE | 2nd Year",
        cgpa: "8.7",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        project: "Campus Website",
        email: "rahul@example.com"
    },

    {
        name: "Ananya Verma",
        role: "AI/ML Developer",
        college: "B.Tech CSE | 2nd Year",
        cgpa: "9.1",
        skills: ["Python", "Java", "AI/ML"],
        project: "Face Recognition",
        email: "ananya@example.com"
    },

    {
        name: "Arjun Mehta",
        role: "Backend Developer",
        college: "B.Tech CSE | 3rd Year",
        cgpa: "8.4",
        skills: ["Python", "Java", "IoT"],
        project: "Smart Home",
        email: "arjun@example.com"
    },

    {
        name: "Priya Singh",
        role: "UI Designer",
        college: "B.Tech CSE | 2nd Year",
        cgpa: "8.9",
        skills: ["UI Design", "HTML", "CSS"],
        project: "App UI Design",
        email: "priya@example.com"
    },

    {
        name: "Karan Malhotra",
        role: "Backend Developer",
        college: "B.Tech CSE | 3rd Year",
        cgpa: "8.2",
        skills: ["Python", "JavaScript", "Java"],
        project: "Learning Portal",
        email: "karan@example.com"
    },

    {
        name: "Sneha Gupta",
        role: "AI/ML Developer",
        college: "B.Tech CSE | 2nd Year",
        cgpa: "9.3",
        skills: ["Python", "React", "JavaScript"],
        project: "AI Assistant",
        email: "sneha@example.com"
    }
];


/* PROJECT SEARCH AND FILTER */

function filterProjects() {

    var search = document.getElementById("projectSearch").value.toLowerCase();

    var category = document.getElementById("projectFilter").value;

    var cards = document.getElementsByClassName("project-card");

    var count = 0;

    for (var i = 0; i < cards.length; i++) {

        var name = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        var description = cards[i].innerText.toLowerCase();

        var categoryName = cards[i].getElementsByClassName("project-category")[0].innerText;

        var searchMatch = name.includes(search) || description.includes(search);

        var categoryMatch = category === "all" || categoryName === category;

        if (searchMatch && categoryMatch) {

            cards[i].style.display = "block";
            count++;

        } else {

            cards[i].style.display = "none";

        }

    }

    document.getElementById("noProjects").style.display =
        count === 0 ? "block" : "none";

}


document.getElementById("projectSearch").addEventListener("input", filterProjects);

document.getElementById("projectFilter").addEventListener("change", filterProjects);


/* STUDENT SEARCH AND FILTER */

function filterStudents() {

    var search = document.getElementById("studentSearch").value.toLowerCase();

    var skill = document.getElementById("skillFilter").value;

    var role = document.getElementById("roleFilter").value;

    var cards = document.getElementsByClassName("student-card");

    var count = 0;

    for (var i = 0; i < cards.length; i++) {

        var name = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        var studentRole = cards[i].getElementsByClassName("student-role")[0].innerText;

        var studentSkills = cards[i].getElementsByClassName("student-skills")[0].innerText;

        var searchMatch = name.includes(search);

        var skillMatch = skill === "all" || studentSkills.includes(skill);

        var roleMatch = role === "all" || studentRole === role;

        if (searchMatch && skillMatch && roleMatch) {

            cards[i].style.display = "block";
            count++;

        } else {

            cards[i].style.display = "none";

        }

    }

    document.getElementById("noStudents").style.display =
        count === 0 ? "block" : "none";

}


document.getElementById("studentSearch").addEventListener("input", filterStudents);

document.getElementById("skillFilter").addEventListener("change", filterStudents);

document.getElementById("roleFilter").addEventListener("change", filterStudents);


/* VIEW PROJECT DETAILS */

function viewProject(index) {

    var project = projects[index];

    var details = document.getElementById("modalDetails");

    details.innerHTML = `

        <p class="small-heading">PROJECT DETAILS</p>

        <h2>${project.name}</h2>

        <p><strong>Category:</strong> ${project.category}</p>

        <p>${project.description}</p>

        <div class="modal-details">

            <p><strong>Required Skills:</strong> ${project.skills}</p>

            <p><strong>Open Positions:</strong> ${project.positions}</p>

            <p><strong>Required Roles:</strong> ${project.roles}</p>

            <p><strong>Project Owner:</strong> ${project.owner}</p>

        </div>

        <button class="primary-button" onclick="requestJoin('${project.contact}', '${project.name}')">

            Request to Join Team

        </button>

    `;

    document.getElementById("detailsModal").style.display = "flex";

}


/* VIEW STUDENT PROFILE */

function viewStudent(index) {

    var student = students[index];

    var details = document.getElementById("modalDetails");

    details.innerHTML = `

        <p class="small-heading">STUDENT PROFILE</p>

        <h2>${student.name}</h2>

        <p><strong>Role:</strong> ${student.role}</p>

        <p>${student.college}</p>

        <div class="modal-details">

            <p><strong>CGPA:</strong> ${student.cgpa}</p>

            <p><strong>Technical Skills:</strong> ${student.skills.join(", ")}</p>

            <p><strong>Previous Project:</strong> ${student.project}</p>

            <p><strong>Email:</strong> ${student.email}</p>

        </div>

        <button class="primary-button" onclick="requestJoin('${student.email}', '${student.name}')">

            Request to Join Team

        </button>

    `;

    document.getElementById("detailsModal").style.display = "flex";

}


/* REQUEST TO JOIN TEAM */

function requestJoin(email, name) {

    var details = document.getElementById("modalDetails");

    details.innerHTML = `

        <p class="small-heading">TEAM COLLABORATION</p>

        <h2>Request to Join</h2>

        <p>You are interested in collaborating with <strong>${name}</strong>.</p>

        <div class="modal-details">

            <p><strong>Contact Details:</strong></p>

            <p>${email}</p>

            <p>Send a message to introduce yourself and explain how you can contribute to the project.</p>

        </div>

        <a href="mailto:${email}?subject=TeamUp%20Collaboration%20Request"

           class="primary-button">

            Send Email Request

        </a>

    `;

}


/* CLOSE MODAL */

function closeModal() {

    document.getElementById("detailsModal").style.display = "none";

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

window.onclick = function(event) {

    var modal = document.getElementById("detailsModal");

    if (event.target === modal) {

        closeModal();

    }

};


/* POST NEW PROJECT */

document.getElementById("projectForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("newProjectName").value;

    var owner = document.getElementById("newProjectOwner").value;

    var category = document.getElementById("newProjectCategory").value;

    var description = document.getElementById("newProjectDescription").value;

    var skills = document.getElementById("newProjectSkills").value;

    var positions = document.getElementById("newProjectPositions").value;


    // Add the new project to the project data

    projects.push({

        name: name,

        category: category,

        description: description,

        skills: skills,

        positions: positions,

        owner: owner,

        contact: "student@example.com",

        roles: skills

    });


    // Create a new project card

    var projectList = document.getElementById("projectList");

    var newCard = document.createElement("div");

    newCard.className = "project-card";

    var newIndex = projects.length - 1;

    newCard.innerHTML = `

        <span class="project-category">${category}</span>

        <h3>${name}</h3>

        <p>${description}</p>

        <div class="project-tech">

            <span>${skills}</span>

        </div>

        <div class="project-info">

            <span>${positions} Positions Open</span>

            <span>By ${owner}</span>

        </div>

        <button class="view-button" onclick="viewProject(${newIndex})">

            View Project →

        </button>

    `;


    projectList.appendChild(newCard);


    // Show success message

    document.getElementById("formMessage").innerText =

        "Your project has been published successfully!";


    // Clear the form

    document.getElementById("projectForm").reset();


    // Refresh project filters

    filterProjects();

});
