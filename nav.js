document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("main-nav");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `
        <nav class="main-navigation">

            <a href="index.html">Home</a>

            <a href="about.html">About Me</a>

            <a href="jobs.html">My Jobs</a>

            <a href="personal.html">Personal</a>

            <a href="school.html">School</a>

        </nav>
    `;

});
