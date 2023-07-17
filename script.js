const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorText = inputControl.querySelector(".error");
  errorText.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorText = inputControl.querySelector(".error");
  errorText.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const reset = () => {
    userName.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';

    userName.style.borderColor = "rgba(9, 9, 9, 0.359)";
    email.style.borderColor = "rgba(9, 9, 9, 0.359)";
    password.style.borderColor = "rgba(9, 9, 9, 0.359)";
    confirmPassword.style.borderColor = "rgba(9, 9, 9, 0.359)";

}

const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

const validateInputs = () => {
  const userNameValue = userName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  let inputValid = true;

  if (userNameValue === "") {
    setError(userName, "Username is required");
    inputValid = false;
  } else if (userNameValue.length < 3 || userNameValue.length > 15) {
    setError(userName, "Username must have between 3 and 15 characters.");
    inputValid = false;
  } else {
    setSuccess(userName);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    inputValid = false;
  } else if (!validateEmail(emailValue)) {
    setError(email, "Email is not in correct format.");
    inputValid = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    inputValid = false;
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 characters long.");
    inputValid = false;
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password");
    inputValid = false;
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords do not match.");
    inputValid = false;
  } else {
    setSuccess(confirmPassword);
  }

  if(inputValid){
    
    const user = `<div class="box"><span>Username:</span> ${userNameValue} <br> <span>Email:</span> ${emailValue} <br> <span>Password:</span> ${passwordValue}</div>`;
    const usersDiv = document.querySelector('.users');
    usersDiv.innerHTML += user;
    
    reset();

  }
};
