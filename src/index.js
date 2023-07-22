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

  const generateContactPage = () => {
    pageLoad.clearSiteContainer();
    pageLoad.header();
    pageLoad.contact();
    pageLoad.footer();
    generateNavButtonEventListeners();
    window.scrollTo(0,0);
  }  

  const generateNavButtonEventListeners = () => {
    const buttonHome = document.getElementById('buttonHome');
    const buttonMenu = document.getElementById('buttonMenu');
    const buttonContact = document.getElementById('buttonContact');
    buttonHome.addEventListener('click', generateHomePage);
    buttonMenu.addEventListener('click', generateMenuPage);
    buttonContact.addEventListener('click', generateContactPage);
  }


  // Initial page load
  generateHomePage();   
  generateNavButtonEventListeners();  
})();