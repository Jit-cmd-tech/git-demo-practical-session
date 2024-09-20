


/*This is the code for my search engine */
function searchFunction() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const resultsUl = document.getElementById('results');
  const allItemsUl = document.getElementById('allItems');
  const items = allItemsUl.getElementsByTagName('li');

  // Clear previous results
  resultsUl.innerHTML = '';

  let hasResults = false;

  for (let i = 0; i < items.length; i++) {
      const txtValue = items[i].textContent || items[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
          const newLi = document.createElement('li');
          newLi.textContent = txtValue; // Display only the name

          // Add click event to populate input
          newLi.onclick = function() {
              input.value = txtValue;
              resultsUl.innerHTML = ''; // Clear results after selection
              resultsUl.style.display = 'none'; // Hide results
          };

          resultsUl.appendChild(newLi);
          hasResults = true;
      }
  }

  // Show results if there are any
  resultsUl.style.display = hasResults ? 'block' : 'none';
}

/*This is the code for my navbar*/

  // Copy code
  // function toggleMenu() {
  //     const navLinks = document.getElementById('navLinks');
  //     navLinks.classList.toggle('active');
  // }



  /*  Amount with vat calculation */
 
  document.getElementById('getInteger').onclick = function() {
    // Get the input value
    let inputValue = document.getElementById('AmountWvat').value;
    
    // Convert to integer
    let integerValue = parseInt(inputValue, 10); // Base 10

    // Check if the conversion was successful
    document.querySelector('#amountWithVat').value=integerValue+(integerValue*0.13);
    
};


/*CODE FOR GOOGLE SHEET*/
const scriptURL = 'https://script.google.com/macros/s/AKfycby9Qbg5rCV51I5KY16moaHQK8GQcg40IycnF0Tgbhp2dUDmO26nAaXwlkrXntye45Di/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form) 
  })
  .then(response => {
    alert("Thank you! Your form is submitted successfully.");
  })
  .then(() => { 
    // window.location.reload(); // Optional: Reload the page
  })
  .catch(error => {
    alert('There was a problem with your submission. Please try again.');
    console.error('Error!', error.message);
  });
});

