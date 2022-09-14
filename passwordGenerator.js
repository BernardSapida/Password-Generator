let person = {
    name: 'John',
    age: 30,
    gender: 'M',
    location: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    },
    contact: {
        email: 'john@gmail.com',
        phone: '555-555-5555',
    }
};

function generatePassword() {
    let htmlOutput = document.getElementById("generatedPassword");
    let charactersLength = document.getElementById("rangeCharacterLength").value;
    let includeUppercaseLetters = document.getElementById("checkboxUppercaseLetters").checked;
    let includeLowercaseLetters = document.getElementById("checkboxLowercaseLetters").checked;
    let includeNumbers = document.getElementById("checkboxNumber").checked;
    let includeSymbols = document.getElementById("checkboxSymbol").checked;
    let password = "";

    let uppercaseLetter = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowercaseLetter = "qwertyuiopasdfghjklzxcvbnm";
    let numbers = "1234567890";
    let symbols = "!@#$%^&*";

    if(!includeUppercaseLetters && !includeLowercaseLetters && !includeNumbers && !includeSymbols) {
        document.getElementById("error-message").innerText = "Couldn't generate password! Please check the password requirement below."
        return;
    }
    
    document.getElementById("error-message").innerText = "";

    if(includeUppercaseLetters) password += uppercaseLetter;
    if(includeLowercaseLetters) password += lowercaseLetter;
    if(includeNumbers) password += numbers;
    if(includeSymbols) password += symbols;

    htmlOutput.value = password.repeat(5).split("").sort(() => Math.random() - 0.5).join("").slice(0, charactersLength);
}

function updateCharacterLength() {
    document.getElementById("characterLength").innerText = document.getElementById("rangeCharacterLength").value;
}

function copyPassword() {
    var password = document.getElementById("generatedPassword");
   
    password.focus();
    password.select();
    document.execCommand('copy');
}