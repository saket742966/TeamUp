
/* ==============================
   TEAMUP - JAVASCRIPT
================================ */

document.addEventListener("DOMContentLoaded", function () {

    console.log("TeamUp application loaded successfully!");

    // Project Data
    const projects = [

        {
            title: "Campus Connect",
            category: "web",
            categoryName: "Web Development",
            description: "A platform that helps college students connect, share resources and discover campus events.",
            skills: ["HTML", "CSS", "JavaScript"],
            positions: 2,
            level: "Beginner Friendly"
        },

        {
            title: "Smart Study Assistant",
            category: "ai",
            categoryName: "AI / Machine Learning",
            description: "An intelligent study assistant that helps students organize notes and manage their learning.",
            skills: ["Python", "Machine Learning"],
            positions: 3,
            level: "Intermediate"
        },

        {
            title: "Smart Home System",
            category: "iot",
            categoryName: "IoT",
            description: "A smart home project that uses connected devices to monitor and control household appliances.",
            skills: ["Arduino", "C++", "IoT"],
            positions: 2,
            level: "Intermediate"
        }

    ];


        // Student Data
    const students = [

        {
            name: "Arjun Sharma",
            initials: "AS",
            cgpa: 8.7,
            skills: ["HTML", "CSS", "JavaScript"],
            role: "Frontend Developer",
            project: "Portfolio Website",
            projectLink: "https://github.com/",
            email: "arjun@example.com"
        },

        {
            name: "Riya Kapoor",
            initials: "RK",
            cgpa: 9.1,
            skills: ["Python", "React", "UI Design"],
            role: "AI/ML Developer",
            project: "Student Performance Predictor",
            projectLink: "https://github.com/",
            email: "riya@example.com"
        },

        {
            name: "Vikram Mehta",
            initials: "VM",
            cgpa: 8.4,
            skills: ["Python", "JavaScript", "CSS"],
            role: "Backend Developer",
            project: "Task Management System",
            projectLink: "https://github.com/",
            email: "vikram@example.com"
        }

    ];


    // Display Project Cards
    function displayProjects(projectList) {

        const projectContainer = document.getElementById("project-container");

        projectContainer.innerHTML = "";

        projectList.forEach(function (project, index) {

            const projectCard = `
                <div class="project-card">

                    <span class="project-category">
                        ${project.categoryName}
                    </span>

                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="project-skills">
                        ${project.skills.map(function (skill) {
                            return `<span>${skill}</span>`;
                        }).join("")}
                    </div>

                    <div class="project-info">
                        <span>${project.positions} Positions Open</span>
                        <span>${project.level}</span>
                    </div>

                    <button class="view-project-btn" data-index="${projects.indexOf(project)}">

                </div>
            `;

            projectContainer.innerHTML += projectCard;

        });

    }


        // Display Student Cards
    function displayStudents(studentList) {

        const studentContainer = document.getElementById("student-container");

        studentContainer.innerHTML = "";

        studentList.forEach(function (student, index) {

            const studentCard = `
                <div class="student-card">

                    <div class="student-avatar">
                        ${student.initials}
                    </div>

                    <h3>${student.name}</h3>

                    <p class="student-role">${student.role}</p>

                    <p class="student-cgpa">
                        CGPA: ${student.cgpa}
                    </p>

                    <div class="student-skills">
                        ${student.skills.map(function (skill) {
                            return `<span>${skill}</span>`;
                        }).join("")}
                    </div>

                    <div class="student-projects">
                        <p>Previous Project:</p>
                        <a href="${student.projectLink}" target="_blank">
                            ${student.project}
                        </a>
                    </div>

                    <button class="contact-student-btn" data-index="${index}">
                        View Profile
                    </button>

                </div>
            `;

            studentContainer.innerHTML += studentCard;

        });

    }

    // Display all students when the website loads
    displayStudents(students);



    // Project Search and Category Filtering

    const projectSearch = document.getElementById("project-search");
    const projectCategory = document.getElementById("project-category");

    // Filter Projects
    function filterProjects() {

        const searchText = projectSearch.value.toLowerCase();
        const selectedCategory = projectCategory.value;

        const filteredProjects = projects.filter(function (project) {

            const matchesSearch =
                project.title.toLowerCase().includes(searchText) ||
                project.description.toLowerCase().includes(searchText) ||
                project.skills.join(" ").toLowerCase().includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                project.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });

        displayProjects(filteredProjects);

    }

    // Listen for Search Input
    projectSearch.addEventListener("input", filterProjects);

    // Listen for Category Selection
    projectCategory.addEventListener("change", filterProjects);

    // Project Details Popup

    const projectModal = document.getElementById("project-modal");
    const closeProjectModal = document.getElementById("close-project-modal");

    // Open Project Details
    document.getElementById("project-container").addEventListener("click", function (event) {

        if (event.target.classList.contains("view-project-btn")) {

            const projectIndex = Number(event.target.dataset.index);
            const project = projects.find(function (item, index) {
                return index === projectIndex;
            });

            if (!project) return;

            document.getElementById("modal-project-title").textContent = project.title;
            document.getElementById("modal-project-category").textContent = project.categoryName;
            document.getElementById("modal-project-description").textContent = project.description;

            document.getElementById("modal-project-skills").innerHTML =
                project.skills.map(function (skill) {
                    return `<span>${skill}</span>`;
                }).join("");

            document.getElementById("modal-project-positions").textContent =
                project.positions + " Positions Open";

            document.getElementById("modal-project-level").textContent =
                "Difficulty: " + project.level;

            projectModal.style.display = "flex";
        }

    });

    // Close Popup
    closeProjectModal.addEventListener("click", function () {
        projectModal.style.display = "none";
    });

    // Close Popup by Clicking Outside
    projectModal.addEventListener("click", function (event) {
        if (event.target === projectModal) {
            projectModal.style.display = "none";
        }
    });

});
