let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

const genereatePassword = (len) => {
    const LowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

    const data = LowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
}
const getPassword = () => {
    const newPassword = genereatePassword(passwordLength.value);
    password.value = newPassword
}

const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href','data:text/plan;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`))
    saveButton.setAttribute('download','MyPasswordGeneratorLOG.txt')
    alert('save completed')
}
