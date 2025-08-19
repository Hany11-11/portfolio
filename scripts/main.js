const projects = [
    {
        title: "Dashboard Editor",
        desc: "A simple dashboard editor built with React.",
        image: "assets/dashboard-demo.png",
        links: [
            { url: "https://github.com/Hany11-11/Dashboard", label: "GitHub" }
        ]
    },
    {
        title: "Motor Traffic Violation Fine Management System",
        desc: "A system to manage motor traffic violation fines.",
        image: "assets/traffic-demo.png",
        links: [
            { url: "#", label: "Live Demo" },
            { url: "#", label: "GitHub" }
        ]
    },
    {
        title: "My Portfolio",
        desc: "A personal portfolio website with responsive design.",
        image: "assets/portfolio-demo.png",
        links: [] // No links for this project
    }
];

function renderProjects() {
    const list = document.getElementById('project-list');
    list.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title} demo">
            <div class="project-title">${project.title}</div>
            <div class="project-desc">${project.desc}</div>
            <div class="project-links">
                ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join('')}
            </div>
        </div>
    `).join('');
}
renderProjects();

const goTopBtn = document.getElementById('goTopBtn');
window.addEventListener('scroll', () => {
    goTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});