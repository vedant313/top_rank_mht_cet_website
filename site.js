const menuButton=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){menuButton.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')))}
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
