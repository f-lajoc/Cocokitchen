//Forgot Password 
let buttonTag = document.querySelector(".otp");
const otpDisplay = document.querySelector("#otp-display");


buttonTag.addEventListener("click", () => {
  let OTP = ""
  for (let i = 0; i < 6; i++){
    OTP += Math.floor(Math.random() * 9);
  otpDisplay.innerText = OTP;
otpDisplay.style.fontSize = "3em";
} 
 })

