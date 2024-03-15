// Get form elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOyrZytCEjyZvh3iyKG1F_vyWPycEFzZs",
  authDomain: "root-vortex-350909.firebaseapp.com",
  databaseURL: "https://root-vortex-350909-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "root-vortex-350909",
  storageBucket: "root-vortex-350909.appspot.com",
  messagingSenderId: "950537432074",
  appId: "1:950537432074:web:154107de0fd34db50083f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Login form event handler
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  // Get email and password values
  const email = loginForm['loginEmail'].value; 
  const password = loginForm['loginPassword'].value; 

  // Firebase authentication: Sign in with email and password
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      alert("You have logged in successfully!");
      window.location.href = 'index.html'; 
    })
    .catch((error) => {
      // Handle login errors
      alert("Error logging in:\n\n" + error.message);
      console.log("Error logging in:\n\n" + error.message);
    });
});

// Signup form event handler
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get email and password values
  const email1 = signupForm["signupEmail1"].value; 
  const email2 = signupForm["signupEmail2"].value; 
  const password = signupForm["signupPassword"].value;

  // Basic email confirmation check
  if (email1 !== email2) {
    displayErrorMessage('signupEmail2', 'The emails do not match.');
    return;
  }

  // Firebase authentication: Create user
  firebase.auth().createUserWithEmailAndPassword(email1, password)
    .then((userCredential) => {
      // Account creation successful
      alert("Account has been created!");
      window.location.href = 'index.html'; 
    })
    .catch((error) => {
      // Handle signup errors
      alert("Error creating account:\n\n" + error.message); 
      console.log("Error creating account:\n\n" + error.message); 
    }); 
});

// Helper for displaying error messages
function displayErrorMessage(targetElementId, message) {
  const errorElement = document.createElement('div');
  errorElement.textContent = message;
  errorElement.style.color = 'red'; 
  document.getElementById(targetElementId).after(errorElement);
}
