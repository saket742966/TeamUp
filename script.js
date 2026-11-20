
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
                if (studentList.length === 0) {

            studentContainer.innerHTML = `
                <div class="no-results">
                    <h3>No Students Found</h3>
                    <p>Try changing your search keyword or filters.</p>
                </div>
            `;

            return;
        }

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

                    <button class="contact-student-btn" data-index="${students.indexOf(student)}">

                </div>
            `;

            studentContainer.innerHTML += studentCard;

        });

    }

    // Display all students when the website loads
    displayStudents(students);
    // Student Search and Filtering

    const studentSearch = document.getElementById("student-search");
    const studentSkill = document.getElementById("student-skill");
    const studentRole = document.getElementById("student-role");

        // Student Profile Popup

    const studentModal = document.getElementById("student-modal");
    const closeStudentModal = document.getElementById("close-student-modal");

           // Project Form Submission

    const projectForm = document.getElementById("project-form");
    const formMessage = document.getElementById("form-message");

    projectForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const projectTitle = document.getElementById("project-title").value.trim();

        const projectDescription = document.getElementById("project-description").value.trim();

        const projectType = document.getElementById("project-type");

        const requiredSkills = document.getElementById("required-skills").value.trim();

        const openPositions = document.getElementById("open-positions").value;

        const projectContact = document.getElementById("project-contact").value.trim();

        // Check Required Fields
        if (
            projectTitle === "" ||
            projectDescription === "" ||
            projectType.value === "" ||
            requiredSkills === "" ||
            openPositions === "" ||
            projectContact === ""
        ) {

            formMessage.textContent = "Please fill in all the fields.";
            formMessage.style.color = "red";

            return;

        }

        // Create New Project
        const newProject = {

            title: projectTitle,

            category: projectType.value,

            categoryName: projectType.options[projectType.selectedIndex].text,

            description: projectDescription,

            skills: requiredSkills.split(",").map(function (skill) {
                return skill.trim();
            }).filter(Boolean),

            positions: Number(openPositions),

            level: "Student Submitted",

            contact: projectContact

        };

        // Add Project to Project Array
        projects.push(newProject);

        // Refresh Project Display
        filterProjects();

        // Show Success Message
        formMessage.textContent = "Your project has been added successfully!";
        formMessage.style.color = "green";

        // Reset Form
        projectForm.reset();

    });

    // Open Student Profile
    document.getElementById("student-container").addEventListener("click", function (event) {

        if (event.target.classList.contains("contact-student-btn")) {

            const studentIndex = Number(event.target.dataset.index);

            const student = students[studentIndex];

            if (!student) return;

            document.getElementById("modal-student-avatar").textContent = student.initials;

            document.getElementById("modal-student-name").textContent = student.name;

            document.getElementById("modal-student-role").textContent = student.role;

            document.getElementById("modal-student-cgpa").textContent =
                "CGPA: " + student.cgpa;

            document.getElementById("modal-student-skills").innerHTML =
                student.skills.map(function (skill) {
                    return `<span>${skill}</span>`;
                }).join("");

            const projectLink = document.getElementById("modal-student-project");

            projectLink.textContent = student.project;
            projectLink.href = student.projectLink;

            const emailLink = document.getElementById("modal-student-email");

            emailLink.textContent = student.email;
            emailLink.href = "mailto:" + student.email;

            studentModal.style.display = "flex";

        }

    });

    // Close Student Profile
    closeStudentModal.addEventListener("click", function () {
        studentModal.style.display = "none";
    });

    // Close Popup by Clicking Outside
    studentModal.addEventListener("click", function (event) {

        if (event.target === studentModal) {
            studentModal.style.display = "none";
        }

    });

    // Filter Students
    function filterStudents() {

        const searchText = studentSearch.value.toLowerCase();
        const selectedSkill = studentSkill.value;
        const selectedRole = studentRole.value;

        const filteredStudents = students.filter(function (student) {

            const matchesSearch =
                student.name.toLowerCase().includes(searchText) ||
                student.role.toLowerCase().includes(searchText) ||
                student.skills.join(" ").toLowerCase().includes(searchText) ||
                student.project.toLowerCase().includes(searchText);

            const matchesSkill =
                selectedSkill === "all" ||
                student.skills.includes(selectedSkill);

            const matchesRole =
                selectedRole === "all" ||
                student.role === selectedRole;

            return matchesSearch && matchesSkill && matchesRole;

        });

        displayStudents(filteredStudents);

    }

    // Listen for Search Input
    studentSearch.addEventListener("input", filterStudents);

    // Listen for Skill Selection
    studentSkill.addEventListener("change", filterStudents);

    // Listen for Role Selection
    studentRole.addEventListener("change", filterStudents);

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

    // Request to Join Team

    const joinProjectButton = document.getElementById("join-project-btn");

    let selectedProject = null;

    // Store the selected project when opening its details
    document.getElementById("project-container").addEventListener("click", function (event) {

        if (event.target.classList.contains("view-project-btn")) {

            const projectIndex = Number(event.target.dataset.index);

            selectedProject = projects[projectIndex];

        }

    });

    // Send Join Request
    joinProjectButton.addEventListener("click", function () {

        if (!selectedProject) {
            return;
        }

        if (!selectedProject.contact) {
            alert("Contact information is not available for this project.");
            return;
        }

        const subject = "Request to Join Project: " + selectedProject.title;

        const message =
            "Hello,\n\n" +
            "I am interested in joining your project: " + selectedProject.title + ".\n\n" +
            "I would like to contribute to this project and collaborate with your team.\n\n" +
            "Please let me know if there is an opportunity to join.\n\n" +
            "Thank you.";

        const emailLink =
            "mailto:" + selectedProject.contact +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(message);

        window.location.href = emailLink;

    });

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
                        const projectContact = document.getElementById("modal-project-contact");

            if (project.contact) {

                projectContact.textContent = project.contact;
                projectContact.href = "mailto:" + project.contact;

            } else {

                projectContact.textContent = "Contact information unavailable";
                projectContact.removeAttribute("href");

            }
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

    // Close Popups Using Escape Key

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            projectModal.style.display = "none";

            studentModal.style.display = "none";

        }

    });

});
