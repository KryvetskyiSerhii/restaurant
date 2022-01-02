const inputName = document.querySelector('.form-input-name')
const inputPhone = document.querySelector('.form-input-phone')
const callBackButton = document.querySelector('.form-callback-btn')
const title = document.querySelector('.form-title')
let newUser = {
    name: "",
    phone: ""
}
let usersArray = []

async function fetchId() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    json.forEach(elem => usersArray.push(elem.name))
    
}

fetchId()

function addUser() {
    if (usersArray.includes(inputName.value)) {
        inputName.style.background = 'red'
        inputName.value = 'The user with such name already exists'
    } else {
        newUser.name = inputName.value
        newUser.phone = inputPhone.value
    }

    return newUser
}

callBackButton.addEventListener('click', addUser)
inputName.addEventListener('click', () => {
    inputName.style.background = 'white'
    inputName.value = ''
})

console.log(newUser);
console.log(usersArray);