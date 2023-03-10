import { header , addEventHeader} from './pages/header.js';
import seeAlso from './pages/seeAlso.js';
import swiperAdder from './pages/swiper.js';
const mainBox = document.querySelector('main');
mainBox.innerHTML += header;
mainBox.innerHTML += seeAlso;
addEventHeader()
swiperAdder()

  
