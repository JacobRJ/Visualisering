"use strict"

let headerA = document.createElement('a')
headerA.href = 'index.html'

let headerImg = document.createElement('img')
headerImg.src = 'img/Nike-logo-clean.png'
headerImg.alt = 'Nike'

let headerH1 = document.createElement('h1')
let headerH1txt = document.createTextNode('Nike Pro Shop')
headerH1.appendChild(headerH1txt)


headerA.appendChild(headerImg)
headerA.appendChild(headerH1)

const menu = {
    "Forside": 'index.html',
    "om nike pro shop": 'about.html',
    "historien om nike": 'history.html',
    "Kontakt": 'contact.html'
}

let nav = document.createElement('nav')
let ul = document.createElement('ul')

for (let key in menu) {
    let li = document.createElement('li')
    let a = document.createElement('a')

    let txt = document.createTextNode(key) 
    a.appendChild(txt) 
    a.href = (menu[key]) 

    li.appendChild(a)
    ul.appendChild(li)
}

nav.appendChild(ul)

let header = document.createElement('header')

header.appendChild(headerA)
header.appendChild(nav)

document.querySelector('body').appendChild(header)