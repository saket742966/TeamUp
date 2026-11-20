
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

                    <button class="view-project-btn" data-index="${index}">
                        View Project
                    </button>

                </div>
            `;

            projectContainer.innerHTML += projectCard;

        });

    }

    // Display all projects when the website loads
    displayProjects(projects);



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



});
