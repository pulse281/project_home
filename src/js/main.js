'use strict';

import menuMobile from './modules/menu-mobile';
import slider from './modules/slider';
import projects from './modules/projects';
import form from './modules/form';
import btn from './modules/btn';

menuMobile('.header', '.hamburger', '.header__menu', '.header__menu-layout', 'header__menu_active');
slider('.slider__items', '.slider__arrow', '.slider__counter');
projects();
form('.form');
btn();

