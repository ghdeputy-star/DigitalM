// Navigation bar
document.addEventListener("DOMContentLoaded", function () {

    const nav = document.createElement("nav");

    nav.innerHTML = `
        <div class="nav-container">
            <a href="index.html">Products</a>
            <a href="jobs.html">My Jobs</a>
            <a href="personal.html">Personal</a>
            <a href="school.html">School</a>
            <a href="product.html">Product</a>
        </div>
    `;

    document.body.prepend(nav);
});
