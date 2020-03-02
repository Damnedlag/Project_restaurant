const menuPage = () => {
    let arrayOfProducts = [
        {'name': 'Some soup', 'price': '2$'},
        {'name': 'Spagetti', 'price': '4$'},
        {'name': 'Pizza', 'price': '5$'}
    ]


    const menuList = document.createElement('ul')
    for(let i = 0; i < 3; i++) {
        let menuRow = document.createElement('li')
        menuRow.innerHTML = arrayOfProducts[i].name + ' ' + arrayOfProducts[i].price
        menuList.appendChild(menuRow)
    }
    const container = document.getElementById('container')
    container.innerHTML = ''
    const title = document.getElementById('title')
    title.innerHTML = 'Menu'
    container.appendChild(menuList)
} 

export default menuPage