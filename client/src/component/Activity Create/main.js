export const selectedCountry = () => {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".option-container");

    const optionList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active")
    });

    optionList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active")
        })
    })
};

export const selectedSeason = () => {
    const selected = document.querySelector(".selected-2");
    const optionsContainer = document.querySelector(".option-container-2");

    const optionList = document.querySelectorAll(".option-2");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active")
    });

    optionList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active")
        })
    })
};

export const selectedDificulty = () => {
    const selected = document.querySelector(".selected-3");
    const optionsContainer = document.querySelector(".option-container-3");

    const optionList = document.querySelectorAll(".option-3");

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active")
    });

    optionList.forEach(o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active")
        })
    })
}