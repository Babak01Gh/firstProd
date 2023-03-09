const hamMenu = document.querySelector('.hamMenu');
const navList = document.querySelector('.navList');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('activeMenu')
    navList.classList.toggle('activeNav')
})