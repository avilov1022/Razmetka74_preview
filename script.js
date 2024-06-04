//#region Arrow to top
window.addEventListener("scroll", function() {
    var arrowToTop = document.querySelector('.scroll-to-top')
    let scrollPosition = window.scrollY; // Получаем текущую позицию прокрутки по вертикали
    let pixelsToTrigger = 700; // Количество пикселей для срабатывания

    if (scrollPosition >= pixelsToTrigger) {
        arrowToTop.style.display = 'flex'
        arrowToTop.classList.add('scroll-in')

    }else{
        arrowToTop.style.display = 'none'
    }
});
//#endregion

//#region Companies

const compainesCont = document.querySelector('.compaines-container');
// compainesCont.innerHTML = "<img src=\"img/companies/image 36.png\" alt=\"Логотип компании\">"

for(var i = 1; i < 43; i++){
    compainesCont.innerHTML += `<img src="img/companies/company (${i}).png" alt="Логотип компании">`
}

//#endregion

//#region Copy text on click
document.querySelector('#copyEmail').addEventListener('click', (event) => {
    copyText = event.target.innerText
    navigator.clipboard.writeText(copyText)
});
//#endregion

//#region Underline header address
document.querySelector('.header__address').addEventListener('mouseover', ()=>{
    var line = document.querySelector('.header__address__hr');

    line.classList.add('hr_roll-out');
})
document.querySelector('.header__address').addEventListener('mouseout', ()=>{
    var line = document.querySelector('.header__address__hr');

    line.classList.remove('hr_roll-out');
})
//#endregion

//#region Navigation dropdown
var menuIsShowed = false;

document.querySelector('#dropdown__btn').addEventListener('click', ()=>{
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var dropdownCheck = document.querySelector('#dropdown-check');
    var dropdownCheckSVG = document.querySelector('#dropdown-checkSVG');
    
    if(!menuIsShowed){
        dropdownMenu.style.display = "block";
        dropdownCheckSVG.classList.remove('check-roll-out')
        dropdownCheckSVG.classList.add('check-roll-in')
        dropdownCheck.setAttribute('fill', '#F49613')
    }else{
        dropdownMenu.style.display = "none";
        dropdownCheckSVG.classList.remove('check-roll-in')
        dropdownCheckSVG.classList.add('check-roll-out')
        dropdownCheck.setAttribute('fill', '#213B43')
    }

    menuIsShowed = !menuIsShowed
})
//#endregion 



//#endregion


//#region Yandex map

//#region 