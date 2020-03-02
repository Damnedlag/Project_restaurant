import contactPage from './contactPage.js'
import menuPage from './menuPage.js'
import homePage from './homePage.js'


const content = document.getElementById('content')

const banner = document.createElement('div')
banner.id = 'banner'
content.appendChild(banner)

const nav = document.createElement('ul')
nav.id = 'navbar'
const home = document.createElement('li')
const menu = document.createElement('li')
const contact = document.createElement('li')
home.innerHTML = 'Home'
contact.innerHTML = 'Contact'
menu.innerHTML = 'Menu'
nav.appendChild(home)
nav.appendChild(menu)
nav.appendChild(contact)
banner.appendChild(nav)

const title = document.createElement('h1')
title.innerHTML = "Welcome to my default restaurant homepage"
title.id = 'title'
content.appendChild(title)
const container = document.createElement('p')
container.id = "container"
container.innerHTML = "This is the introduction of our great team at this dream restaurant. Jk, it's placeholder. \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
content.appendChild(container)

contact.addEventListener('click', (e) => contactPage())
menu.addEventListener('click', (e) => menuPage())
home.addEventListener('click', (e) => homePage())