const contactPage = () => {
    const container = document.getElementById('container')
    container.innerHTML = 'Well, this is the contact page so here\'s some  contact copypaste: '
    const address = document.createElement('p')
    container.appendChild(address).innerHTML = 'This is an address'
}

export default contactPage