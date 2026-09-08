document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("main-nav");

    if (!navigation) {
        return;
    }

    navigation.innerHTML = `
        <nav class="main-navigation">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Me</a></li>
                <li><a href="jobs.html">My Jobs</a></li>
                <li><a href="personal.html">Personal</a></li>
                <li><a href="school.html">School</a></li>
            </ul>
        </nav>
    `;

});
