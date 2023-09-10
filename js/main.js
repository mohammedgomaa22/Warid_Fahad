import languages from './lang.js';


// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();

// ***************************************************

const changeLanguage = () => {
    const changeBtn = document.querySelector(".language .lang"),
        elements = document.querySelectorAll("[data-text]");
    
    // --------------
    
    // Change BTN Content and set in localStorage
    changeBtn.addEventListener("click", () => {
        changeBtn.dataset.lang === "AR" ? changeBtn.dataset.lang = "EN": changeBtn.dataset.lang = "AR";
        setLanguage(changeBtn.dataset.lang);
        localStorage.setItem("language", changeBtn.dataset.lang.toUpperCase());
        changeBtn.innerHTML = changeBtn.dataset.lang.toUpperCase();
    });
    
    
    document.addEventListener("DOMContentLoaded", () => {
        const language = localStorage.getItem("language") || "AR";
        setLanguage(language);
        changeBtn.innerHTML = localStorage.getItem("language") || changeBtn.dataset.lang.toUpperCase();
    });

    // Set Language
    const setLanguage = (language) => {
        elements.forEach((ele) => {
            const languagesKey = ele.getAttribute("data-text");
            // -----------

            ele.textContent = languages[language.toLowerCase()][languagesKey];
            // --------

            // Change ele Style
        });
        let infoLand = document.querySelectorAll(".chan");

        infoLand.forEach((ch) => {
            if (language === "AR") {
                ch.classList.remove("md:text-left");
                ch.classList.add("md:text-right");
            } else {
                ch.classList.remove("md:text-right");
                ch.classList.add("md:text-left");
            }
        });
        document.dir = language === "AR" ? "rtl" : "ltr";
    };

};
changeLanguage();
// ***************************************************