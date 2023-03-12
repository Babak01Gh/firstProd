import { header , addEventHeader} from './pages/header.js';
import seeAlso from './pages/seeAlso.js';
import swiperAdder from './pages/swiper.js';
import { works , worksEvents} from './pages/works.js';
const mainBox = document.querySelector('main');
mainBox.innerHTML += header;
mainBox.innerHTML += seeAlso;
mainBox.innerHTML += works
addEventHeader()
swiperAdder()
worksEvents()