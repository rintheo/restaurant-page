import './style.css';
import * as pageLoad from './pageload.js';

const navController = (() => {
  const generateHomePage = () => {
    pageLoad.clearSiteContainer();
    pageLoad.header();
    pageLoad.home();
    pageLoad.footer();
    generateNavButtonEventListeners();
    window.scrollTo(0,0);
  }  
 

  const generateMenuPage = () => {
    pageLoad.clearSiteContainer();
    pageLoad.header();
    pageLoad.menu();
    pageLoad.footer();
    generateNavButtonEventListeners();
    window.scrollTo(0,0);
  }  

  const generateNavButtonEventListeners = () => {
    const buttonHome = document.getElementById('buttonHome');
    const buttonMenu = document.getElementById('buttonMenu');
    buttonHome.addEventListener('click', generateHomePage);
    buttonMenu.addEventListener('click', generateMenuPage);
  }


  // Initial page load
  generateHomePage();   
  generateNavButtonEventListeners();  
})();