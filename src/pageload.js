import imgLogo from './images/narutoramenlogo.png';
import imgTonkotsu from './images/ramen-tonkotsu.jpeg';
import imgShio from './images/ramen-shio.jpeg';
import imgShoyu from './images/ramen-shoyu.jpeg';
import imgMiso from './images/ramen-miso.jpeg';
import imgGyoza from './images/side-gyoza.jpeg';
import imgKaraage from './images/side-karaage.jpg';
import imgOkonomiyaki from './images/side-okonomiyaki.jpg';
import imgTakoyaki from './images/side-takoyaki.jpg';
import imgWater from './images/drinks-water.jpg';
import imgSoda from './images/drinks-soda.jpg';
import imgBeer from './images/drinks-beer.jpeg';

const siteContainer = document.querySelector('.site-container'); 

const clearSiteContainer = () => {
  while (siteContainer.firstChild) {
    siteContainer.removeChild(siteContainer.firstChild);
  }
}

const header = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const maxWidth = document.createElement('div');
  maxWidth.classList.add('max-width');

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const h1 = document.createElement('h1');
  h1.textContent = 'りんらめん';

  const img = document.createElement('img');
  img.src = imgLogo;
  img.alt = 'Rin Ramen Logo';

  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const ul = document.createElement('ul');
  const ulItems = ['Home', 'Menu', 'Contact', 'Order Now'];

  for (let ulItem of ulItems) {
    const li = document.createElement('li');

    const button = document.createElement('button');
    if (ulItem !== 'Order Now') {
      button.classList.add('nav-button');
      button.id = `button${ulItem}`;
    }
    else {
      button.classList.add('order-button');
    }
    button.textContent = ulItem;

    li.appendChild(button);
    ul.appendChild(li);
  }

  logo.appendChild(h1);
  logo.appendChild(img);
  maxWidth.appendChild(logo);
  nav.appendChild(ul);
  maxWidth.appendChild(nav);
  header.appendChild(maxWidth);
  siteContainer.appendChild(header);
}

const home = () => {
  const main = document.createElement('main');

  const hero = document.createElement('div');
  hero.classList.add('hero');
  
  const maxWidth = document.createElement('div');
  maxWidth.classList.add('max-width');

  const container = document.createElement('div');
  container.classList.add('container');

  const h2 = document.createElement('h2');
  h2.textContent = 'Feed your cravings';

  const p = document.createElement('p');
  p.textContent = "With over 50 years of history, our ramen is something you'll always be coming back to.";

  const button = document.createElement('button');
  button.classList.add('order-button');
  button.textContent = 'Order Now';

  const featured = document.createElement('div');
  featured.classList.add('featured');

  const ul = document.createElement('ul');
  const ulItems = [
    {src: imgTonkotsu, p: 'Tonkotsu'},
    {src: imgShio, p: 'Shio'},
    {src: imgShoyu, p: 'Shoyu'},
    {src: imgMiso, p: 'Miso'},
  ];

  for (let ulItem of ulItems) {
    const li = document.createElement('li');
    
    const img = document.createElement('img');
    img.src = ulItem.src;
    img.alt = `${ulItem.p} Ramen`;

    const p = document.createElement('p');
    p.textContent = ulItem.p;
  
    li.appendChild(img);
    li.appendChild(p);
    ul.appendChild(li);
  }

  container.appendChild(h2);
  container.appendChild(p);
  container.appendChild(button);
  maxWidth.appendChild(container);
  hero.appendChild(maxWidth);
  featured.appendChild(ul);
  main.appendChild(hero);
  main.appendChild(featured);
  siteContainer.appendChild(main);
}

const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const p = document.createElement('p');

  const a = document.createElement('a');
  a.setAttribute("href", 'https://github.com/rintheo/');

  const dummy = document.createElement('div');

  const span = document.createElement('span');
  const date = new Date().getFullYear();
  span.textContent = ` © ${date} rintheo`;

  a.appendChild(dummy);
  p.appendChild(a);
  p.appendChild(span);  
  footer.appendChild(p);
  siteContainer.appendChild(footer);

  dummy.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>GitHub</title><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';
}

const menu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const maxWidth = document.createElement('div');
  maxWidth.classList.add('max-width');

  const menuItems = ['Ramen', 'Sides', 'Drinks'];
  const ramenItems = [
    {src: imgTonkotsu, p: 'Tonkotsu Ramen'},
    {src: imgShio, p: 'Shio Ramen'},
    {src: imgShoyu, p: 'Shoyu Ramen'},
    {src: imgMiso, p: 'Miso Ramen'},
  ];
  const sidesItems = [
    {src: imgGyoza, p: 'Gyoza'},
    {src: imgKaraage, p: 'Karaage'},
    {src: imgOkonomiyaki, p: 'Okonomiyaki'},
    {src: imgTakoyaki, p: 'Takoyaki'},
  ];
  const drinkItems = [
    {src: imgWater, p: 'Bottled Water'},
    {src: imgSoda, p: 'Canned Soda'},
    {src: imgBeer, p: 'Canned Beer'},
  ];

  for (let menuItem of menuItems) {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const h3 = document.createElement('h3');
    h3.textContent = menuItem;
    menu.appendChild(h3);

    let items;

    if (menuItem === 'Ramen') {
      items = ramenItems;
    }
    else if (menuItem === 'Sides') {
      items = sidesItems;
    }
    else if (menuItem === 'Drinks') {
      items = drinkItems;
    }

    for (let item of items) {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = `${item.p}`;
  
      const p = document.createElement('p');
      p.textContent = item.p;

      card.appendChild(img);
      card.appendChild(p);
      menu.appendChild(card);
    }  

    maxWidth.appendChild(menu);
  }
  
  menuContainer.appendChild(maxWidth);
  siteContainer.appendChild(menuContainer);
}

const contact = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const h2 = document.createElement('h2');
  h2.textContent = "Contact Us";

  const p1 = document.createElement('p');
  p1.textContent = "Got a question, comment or suggestion?";

  const p2 = document.createElement('p');
  p2.textContent = "We'd love to hear from you!";

  const card = document.createElement('div');
  card.classList.add('card');

  const h3 = document.createElement('h3');
  h3.textContent = "Rin Ramen";
  card.appendChild(h3);

  const contacts = [
    'feedback@rinramen.com',
    '+X 123-456-7890',
    '+X 225-216-7230',
    '+X 505-646-7160',
  ];

  for (let contact of contacts) {
    const p = document.createElement('p');
    p.textContent = contact;
    card.appendChild(p);
  }

  contactContainer.appendChild(h2);
  contactContainer.appendChild(p1);
  contactContainer.appendChild(p2);
  contactContainer.appendChild(card);
  siteContainer.appendChild(contactContainer);
}

export {
  clearSiteContainer,
  header,
  home,
  footer,
  menu,
  contact,
}