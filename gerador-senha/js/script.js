//VARIÁVEIS EM GERAL

const passInput = document.querySelector("#inputPassword");
const lenInput = document.querySelector("#inputLength");
const labLength = document.querySelector('label[for="inputLength"]');
const btnGerar = document.querySelector("#btnGerar");

//CHECKBOX

const checkLower = document.querySelector("#checkLower");
const checkUpper = document.querySelector("#checkUpper");
const checkNumbers = document.querySelector("#checkNumbers");
const checkSymbols = document.querySelector("#checkSymbols");
const aviso = document.querySelector("#aviso");

//CARACTERS

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = ["@", "!", "#", "$", "%", "&"]

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

labLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
   labLength.innerHTML = lenInput.value;
})

btnGerar.addEventListener("click", () => {
   generatePassword(
      checkLower.checked,
      checkUpper.checked,
      checkNumbers.checked,
      checkSymbols.checked,
      lenInput.value
   );
});

function generatePassword (hasLowercase, hasUppercase, hasNumbers, hasSymbols, length) {
   const newArray = [
      ...(hasLowercase ? LowercaseCaracters : []),
      ...(hasUppercase ? UppercaseCaracters : []),
      ...(hasNumbers ? numbers : []),
      ...(hasSymbols ? symbols : [])
   ];

   if(newArray.length === 6 ){
      return console.log('error')
   }else{
      let password = "";
      for(let i = 0; i < length; i++){
         const randomIndex = Math.floor(Math.random() * newArray.length);
         password += newArray[randomIndex];
      }
      passInput.value = password;  
   }
    
}