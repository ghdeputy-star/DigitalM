/* =========================================
   GRACELYN'S WEBSITE NAVIGATION
========================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =========================================
           FIND NAVIGATION AREA
        ========================================== */

        const navigation =
            document.getElementById("navigation");


        /* Stop if the page doesn't have navigation */

        if (!navigation) {

            return;

        }



        /* =========================================
           CREATE NAVIGATION
        ========================================== */

        navigation.innerHTML = `

            <nav class="primary-navigation">


                <a href="index.html">
                    Home
                </a>


                <a href="about.html">
                    About Me
                </a>


                <a href="jobs.html">
                    My Jobs
                </a>


                <a href="personal.html">
                    Personal
                </a>


                <a href="school.html">
                    School
                </a>


            </nav>



            <nav class="secondary-navigation">


                <a href="about.html">
                    About
                </a>


                <a href="jobs.html">
                    Experience
                </a>


                <a href="personal.html">
                    Interests
                </a>


                <a href="school.html">
                    Education
                </a>


            </nav>

        `;



        /* =========================================
           SPARKLY MOUSE TRAIL
        ========================================== */


        document.addEventListener(
            "mousemove",
            function (event) {


                /* Create sparkle */

                const sparkle =
                    document.createElement("span");


                sparkle.classList.add("sparkle");


                /* Different sparkle shapes */

                const sparkleChoices = [

                    "✦",
                    "✧",
                    "⋆",
                    "✦",
                    "✧"

                ];


                /* Pick random sparkle */

                sparkle.innerHTML =
                    sparkleChoices[
                        Math.floor(
                            Math.random() *
                            sparkleChoices.length
                        )
                    ];


                /* Put sparkle where mouse is */

                sparkle.style.left =
                    event.clientX + "px";


                sparkle.style.top =
                    event.clientY + "px";


                /* Add sparkle to page */

                document.body.appendChild(
                    sparkle
                );


                /* Remove sparkle */

                setTimeout(
                    function () {

                        sparkle.remove();

                    },
                    800
                );


            }
        );


    }
);
