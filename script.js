/* =========================================================
   NIKHIL PORTFOLIO — INTERACTIVE JAVASCRIPT
========================================================= */


/* =========================================================
   FOOTER YEAR
========================================================= */

const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {

    const yearText = footer.querySelector("p");

    if (yearText) {

        yearText.innerHTML =
            `© ${year} Nikhil Raju Yelmame`;

    }

}


/* =========================================================
   MOUSE PARALLAX EFFECT
========================================================= */

const hero = document.querySelector(".hero");

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 20;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 20;

        hero.style.backgroundPosition =
            `${50 + x}% ${50 + y}%`;

    });

}


/* =========================================================
   CARD TILT EFFECT
========================================================= */

const cards = document.querySelectorAll(
    ".project-card, .skill-card, .achievement-card"
);

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll(".navbar nav a");

const pageSections =
    document.querySelectorAll("section[id]");

if (navLinks.length > 0 && pageSections.length > 0) {

    const navObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        navLinks.forEach((link) => {

                            link.classList.remove("active");

                        });

                        const activeLink =
                            document.querySelector(
                                `.navbar nav a[href="#${entry.target.id}"]`
                            );

                        if (activeLink) {

                            activeLink.classList.add("active");

                        }

                    }

                });

            },
            {
                threshold: 0.45
            }
        );

    pageSections.forEach((section) => {

        navObserver.observe(section);

    });

}


/* =========================================================
   CURSOR GLOW
========================================================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "180px";
cursorGlow.style.height = "180px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "9999";

cursorGlow.style.background =
    "radial-gradient(circle, rgba(113,135,255,0.10), transparent 70%)";

cursorGlow.style.transform =
    "translate(-50%, -50%)";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "🚀 Nikhil's Portfolio loaded successfully."
);

console.log(
    "Built with curiosity, code & continuous learning."
);