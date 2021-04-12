  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFspzj0cnNVMbKeFQOlGya3TNWYgcUE9I",
    authDomain: "sampleprojecttemplate-1.firebaseapp.com",
    projectId: "sampleprojecttemplate-1",
    storageBucket: "sampleprojecttemplate-1.appspot.com",
    messagingSenderId: "48686952941",
    appId: "1:48686952941:web:5b1e0ba5c0918dfc4777e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

//reference contact info collections

let contactInfo = firebase.database().ref("Users");

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
// let  bIsSuccessfulPassword = false;
// let  bIsSuccessfulPass2 = false;
let  bIsSuccessfulName = false;
let  bIsSuccessfulEmail = false;
let  bIsSuccessfulMessage = false;
let bIsSubmitted= false;

form.addEventListener('submit', e => {
	e.preventDefault();
	
    checkInputs();
    
    if(bIsSuccessfulName && bIsSuccessfulEmail && bIsSuccessfulMessage){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    saveContacts(usernameValue,emailValue,messageValue);
    document.querySelector(".form").reset();
    bIsSubmitted = true;
    sendEmail(usernameValue,emailValue,messageValue);
    }
});

//sending an email: https://smtpjs.com/
function sendEmail(name,email,message){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "itsbektash@gmail.com",
        Password : "pgmyclmozppwneef", //https://www.youtube.com/watch?v=i2eXkSKjl0A
        To : `itsbektash@gmail.com`, //you can add the user email here for verification or any number of emails!
        From : "itsbektash@gmail.com",
        Subject : `${name} sent you a message`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message:${message}`,
    }).then(
      message => alert("Thank you for sending us a message!")
    );
}

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
	// const passwordValue = password.value.trim();
	// const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        bIsSuccessfulName = false;
	} else {
        setSuccessFor(username);
        bIsSuccessfulName = true;
	}
	
	if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        bIsSuccessfulEmail = false;
	} else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        bIsSuccessfulEmail = false;
	} else {
        setSuccessFor(email);
        bIsSuccessfulEmail = true;
	}
	if(messageValue === '') {
        setErrorFor(message, 'please fill in your message');
        bIsSuccessfulMessage = false;
	} else {
        setSuccessFor(message);
        bIsSuccessfulMessage = true;
	}
	// if(passwordValue === '') {
    //     setErrorFor(password, 'Password cannot be blank');
    //     bIsSuccessful = false;
	// } else {
    //     setSuccessFor(password);
    //     bIsSuccessful = true;
	// }
	
	// if(password2Value === '') {
    //     setErrorFor(password2, 'Password2 cannot be blank');
    //     bIsSuccessful = false;
	// } else if(passwordValue !== password2Value) {
    //     setErrorFor(password2, 'Passwords does not match');
    //     bIsSuccessful = false;
	// } else{
    //     setSuccessFor(password2);
    //     bIsSuccessful = true;
	// }

    
}
form.addEventListener('input',()=>{
   if(bIsSubmitted){
    clearAll(username,'');
    clearAll(email,'');
    clearAll(message,'');
    // clearAll(password,'');
    // clearAll(password2,'');
   }
});

function clearAll(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control';
    small.innerText = message;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function saveContacts(username,email,message){
    let newContactInfo = contactInfo.push();
    newContactInfo.set({

        username:username,
        email:email,
        message:message,


    });
}