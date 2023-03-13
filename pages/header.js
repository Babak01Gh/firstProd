const header = `
<header class="main-head">
    <div class="headNav">
        <div class="logoContainer">
        <img src="assets/images/mainLogo.PNG" alt="logo" class="logo">
        <h1 class="nameCom">سیگرویام</h1>
        </div>
        <ul class="navList" dir="rtl">
           <li><a href="#">صفحه اصلی</a></li>
           <li><a href="#">خدمات ما</a></li>
           <li><a href="#">درباره ما</a></li>
           <li><a href="#">تماس با ما</a></li>
        </ul>
        <div class="hamMenu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
    <section class="banner" dir="rtl">
        <img src="assets/images/banner.jpg" alt="banner" width="100%" height="100%">
        <div class="banner--titles">
            <span>ارائه دهنده انواع خدمات</span>
            <h1><strong>دفتر پیشخوان خدمات دولت و بخش عمومی</strong></h1>
            <p>پیشخوان همه موارد , <strong>پستکس</strong> , <strong>ره&nbsp;وار</strong> , <strong>ایرانیش</strong> , بیمه سامان
            , کارگزاری مویرگ خاورمیانه بر خط (بازاریابی انواع بیمه تمام شرکت های بیمه ای عضو سیستم مویرگ) و کلیه خدمات جامع اینترنتی
            </p>
        </div>
    </section>
</header>`

const addEventHeader = () =>{
    const hamMenu = document.querySelector('.hamMenu');
    const navList = document.querySelector('.navList');
    const main = document.querySelector('main');
    hamMenu.addEventListener('click',()=>{
        hamMenu.classList.toggle('activeMenu')
        navList.classList.toggle('activeNav')
        main.classList.toggle('fixed-position')
        console.log('hi')
    })
}
export {header,addEventHeader}