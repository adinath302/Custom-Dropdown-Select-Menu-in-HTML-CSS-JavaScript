const optionmenu = document.querySelector(".select-menu"),
    selectbtn = optionmenu.querySelector(".select-btn"),
    options = optionmenu.querySelectorAll(".option"),
    sbtn_text = optionmenu.querySelector(".sbtn-text");

selectbtn.addEventListener("click", () => optionmenu.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedoption = option.querySelector(".option-text").innerHTML;
        sbtn_text.innerText = selectedoption;

        optionmenu.classList.remove("active");
    })
})