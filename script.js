// FAQ
document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function(question) {
    question.addEventListener("click", function() {
      const currentAnswer = this.nextElementSibling;
      
      // Check if the clicked answer is already active
      const isActive = currentAnswer.classList.contains("active");

      // First, close all answers
      closeAllAnswers();

      // Then, if the clicked answer was not active, open it
      if (!isActive) {
        this.classList.add("active");
        currentAnswer.classList.add("active");
      }
    });
  });

  function closeAllAnswers() {
    questions.forEach(function(question) {
      question.classList.remove("active");
      const answer = question.nextElementSibling;
      answer.classList.remove("active");
    });
  }
});










// Animation of third section ~~ Home page
window.addEventListener('scroll', function() {
  var sub = document.getElementById('sub');
  var main = document.getElementById('main');
  
  if (window.pageYOffset > main.offsetTop) {
    sub.style.display = 'block';
  } else {
    sub.style.display = 'none';
  }
  
  if (window.pageYOffset > (main.offsetTop + main.offsetHeight - sub.offsetHeight)) {
    sub.style.position = 'absolute';
    sub.style.top = main.offsetHeight - sub.offsetHeight + 'px';
  } else {
    sub.style.position = 'sticky';
    sub.style.top = 0;
  }
});



// Contact Us
const contactButtonMain = document.getElementById('contactButton');
contactButtonMain.addEventListener('click', function() {
  window.location.href = './components/Contact/contact.html';
});


// Redirect from second page button
const contactButtonSecond = document.getElementById('redirectButton');
contactButtonSecond.addEventListener('click', function() {
  window.location.href = '/components/Contact/contact.html';
});
const contactButtonThird = document.getElementById('redirectButtons');
contactButtonThird.addEventListener('click', function() {
  window.location.href = '/components/Contact/contact.html';
});
function redirectToContact() {
  window.location.href = "../Contact/contact.html";
}





// Learn More
const Learnmore = document.getElementById('learnmore');
Learnmore.addEventListener('click', function() {
  window.location.href = './components/Services/services.html';
});





// email verification
function validateEmail(event) {
  event.preventDefault(); // Prevent form submission
  const emailInput = document.getElementById('email');
  const errorElement = document.getElementById('error');

  // Regular expression for basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    errorElement.textContent = 'Please enter a valid email address';
    emailInput.focus();
  } else {
    errorElement.textContent = '';
    // Proceed with form submission or other actions
    console.log('Email is valid:', emailInput.value);
    // For demonstration, let's submit the form
    document.getElementById('emailForm').submit();
  }
}

// Uppercase  first letter of string
function autoCapitalize() {
  const inputText = document.getElementById('inputText');
  const currentValue = inputText.value;

  if (currentValue.length === 0) return; // No need to capitalize if empty

  // Split the input by spaces
  const words = currentValue.split(' ');

  // Capitalize each word
  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return '';
    }
  });

  // Join the capitalized words with spaces
  const capitalized = capitalizedWords.join(' ');

  // Update the input value with the capitalized text
  inputText.value = capitalized;
}









// document.addEventListener("DOMContentLoaded", function() {
//   var button = document.getElementById("showThankYouButton");
//   var thankYouMessage = document.getElementById("popup");

//   button.addEventListener("click", function() {
//     if (popup) {
//       thankYouMessage.style.display = "block";
//     }
//   });
// });

const popup = document.getElementById('showThankYouButton');
Learnmore.addEventListener('click', function() {
  popup.style.display = "block";
});