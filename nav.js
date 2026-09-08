/* =========================================
   WEBSITE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `

        <nav class="primary-navigation">

            <a href="index.html">Home</a>

            <a href="about.html">About Me</a>

            <a href="jobs.html">My Jobs</a>

            <a href="personal.html">Personal</a>

            <a href="school.html">School</a>

        </nav>

        <nav class="secondary-navigation">

            <a href="about.html">About</a>

            <a href="jobs.html">Experience</a>

            <a href="personal.html">Interests</a>

            <a href="school.html">Education</a>

        </nav>

    `;


    /* =========================================
       SPARKLY MOUSE EFFECT
    ========================================= */

    document.addEventListener("mousemove", function (event) {

        const sparkle = document.createElement("span");

        sparkle.classList.add("sparkle");

        const sparkles = ["✦", "✧", "⋆", "✦", "⋆"];

        sparkle.innerHTML =
            sparkles[Math.floor(Math.random() * sparkles.length)];

        sparkle.style.left = event.clientX + "px";
        sparkle.style.top = event.clientY + "px";

        document.body.appendChild(sparkle);

        setTimeout(function () {
            sparkle.remove();
        }, 800);

    });

});
