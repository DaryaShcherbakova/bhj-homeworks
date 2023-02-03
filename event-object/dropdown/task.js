const dropdownValue = document.querySelector(".dropdown__value");
const dropdownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropdownValue.addEventListener("click", function(element) {
    const dropdown = element.target.closest (".dropdown");
    const dropdownList = dropdown.querySelector(".dropdown__list");

    if (dropdownList) {
        dropdownList.classList.add("dropdown__list_active");
        element.preventDefault();
        return false;
    }
})

// замена значения по выбору соответствующего пункта меню

for (let i = 0; i< dropdownItem.length; i++) {
    dropdownItem[i].addEventListener("click", function(e) {
        dropdownValue.textContent = dropdownItem[i].textContent;
        document.querySelector('.dropdown__list_active').classList.remove("dropdown__list_active");
        e.preventDefault(); 
    })
}


