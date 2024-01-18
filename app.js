// const form = document.querySelector('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevents the form from submitting by default

//   // Validate the form inputs
//   if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
//     alert('Please fill out all fields before submitting!');
//   } else {
//     // Submit the form
//     const formData = new FormData(event.target);

//     fetch('submit-contact-form.html', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Thank you for contacting us!');
//         form.reset(); // Resets the form inputs
//       } else {
//         alert('An error occurred. Please try again later.');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       alert('An error occurred. Please try again later.');
//     });
//   }
// });
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el))