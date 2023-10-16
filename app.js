const passValue= document.querySelector('.password-box input')
const copyBtn = document.querySelector('.password-box #copy-btn')
const passIndigator = document.querySelector('.indicator-box .indicator')
const passLength = document.querySelector('.password-length-box input')
const passLengthText = document.querySelector('.password-length-box .password-length-value')
const options = document.querySelectorAll('.settings .lowercase #lowercase')
const generate = document.querySelector('.generate-pass')
// const lowercaseCheck = document.querySelector('#lowercase')

const values={
    uppercase:'ABCDEFGHIKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghiklmnopqrstuvwxyz',
    numbers: '0123456789',
    simbols: '!@#$%^&(*)-+<>,:}][=/'
}

// lowercaseCheck.addEventListener('change',(e)=>{
//     e.target.setAttribute('checked','')
// })


function generatePassword(){
    let strongPassword='';
    let randomPassword='';
    let length = passLength.value

    options.forEach((option) =>{
        if(option.checked){
            strongPassword +=values[option.id]
        }
    })

    for(let i = 0; i<length;i++){
        randomPassword+=strongPassword[Math.floor(Math.random()*strongPassword.length)]
    }

    passValue.value=randomPassword
}

copyBtn.addEventListener('click',()=>{
    // copy anelu hamara
    navigator.clipboard.writeText(passValue.value)
})

function updateIndicator(){
    if(passLength.value <= 8){
        passIndigator.id = 'weak'
    }else if(passLength.value <= 16){
        passIndigator.id = 'medium'
    }else{
        passIndigator.id = 'strong'
    }
    
}

passLength.addEventListener('input',()=>{
    generatePassword()
    updateIndicator()
    passLengthText.textContent = passLength.value
})

generate.addEventListener('click',generatePassword)