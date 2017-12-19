window.addEventListener('load', () => {

    const input = document.getElementById('input')
    const btn = document.getElementById('btn')
    const form = document.querySelector('form')
    const ul = document.querySelector('ul')
    
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
    localStorage.setItem('items', JSON.stringify(itemsArray))
    const data = JSON.parse(localStorage.getItem('items'))

    const makeLi = (text) => {
        const li = document.createElement('li')
        li.textContent = text
        ul.appendChild(li)
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        // append value of input box to the itemsArray array
        itemsArray.push(input.value)
        // invoke the makeLi func, passing value of input box as the argument
        makeLi(input.value)
        // setItem is a built in localStorage method. first param is the key. second is the value
        localStorage.setItem('items', JSON.stringify(itemsArray))

        // empty the input box after submission
        input.value = ''
    })

    // loop through the array and create an li with the input box's value
    data.forEach(item => {
        makeLi(item)
    })

    btn.addEventListener('click', () => {
        // clear everything in localStorage
        localStorage.clear()
        // while child of ul element exists, remove that child
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild)
        }
    })
})