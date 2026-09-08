// Navigation configuration data
const navigationData = {
    primaryLinks: [
        { name: "Home", url: "index.html" },
        { name: "About", url: "about.html" },
        { name: "Projects", url: "projects.html" },
        { name: "Contact", url: "contact.html" }
    ],
    secondaryLinks: [
        { name: "Gallery", url: "gallery.html" },
        { name: "FAQ", url: "faq.html" },
        { name: "Blog", url: "blog.html" }
    ]
};

// Function to generate dynamic navigation HTML
function createNavHTML(links, navClass) {
    const nav = document.createElement('nav');
    nav.className = navClass;
    
    const ul = document.createElement('ul');
    
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    return nav;
}

// Render navigation into designated target elements across all pages
document.addEventListener("DOMContentLoaded", () => {
    // Header Navigation
    const topPrimary = document.getElementById("top-primary-nav");
    const topSecondary = document.getElementById("top-secondary-nav");

    if (topPrimary) {
        topPrimary.appendChild(createNavHTML(navigationData.primaryLinks, "primary-nav"));
    }
    if (topSecondary) {
        topSecondary.appendChild(createNavHTML(navigationData.secondaryLinks, "secondary-nav"));
    }

    // Sidebar Navigation
    const sidePrimary = document.getElementById("side-primary-nav");
    const sideSecondary = document.getElementById("side-secondary-nav");

    if (sidePrimary) {
        sidePrimary.appendChild(createNavHTML(navigationData.primaryLinks, "primary-nav"));
    }
    if (sideSecondary) {
        sideSecondary.appendChild(createNavHTML(navigationData.secondaryLinks, "secondary-nav"));
    }
});
