// When the button is clicked, handle the click event using JavaScript. Inside the event handler, retrieve the value entered in the text input

// 1.Create a new HTML page with a text input and a button.
// 2. When the button is clicked -->click event using JavaScript.
// 3. Inside the event handler, retrieve the value entered in the text input.
// 4. Use the fetch() function to send a request to the Agify API, passing the name as a query parameter.
// 5. Wait for the API response to be received.
// 6. Once the response is received, parse the response as JSON.
// 7. Create a new <div> element dynamically using JavaScript to display the result.
// 8. Set the content of the new <div> to the information retrieved from the API response (e.g., the name and estimated age).
// 9. Append the new <div> to the page, so it appears below any previous requests.
// 10. Repeat steps 2-9 every time the button is clicked, creating a new <div> for each API call and displaying the results.
// 11. Each time a new API call is made, preserve the previous requests by creating separate <div> elements for each request.

// script.js

// Get references to the input and submit button elements
const input = document.getElementById("input");
const submitButton = document.getElementById("button");
const countries = document.getElementById("countries");

// Function to handle the button click event
function handleClick() {
  // Retrieve the value entered in the text input
  const name = input.value;
  const country = countries.value;

  // Make the fetch request to the Agify API
  //   fetch(`https://api.agify.io/?name=${name}`)
  fetch(`https://api.agify.io/?name=${name}&country_id=${country}`)
    .then((response) => response.json())
    .then((data) => {
      // Create a new div element to display the result
      const resultDiv = document.createElement("div");

      // Set the content of the new div with the retrieved information
      resultDiv.textContent = `Name: ${data.name}, Age: ${data.age}`;

      // Append the new div to the page
      document.body.appendChild(resultDiv);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  localStorage.setItem("name", data.name);
  localStorage.setItem("age", data.age);
  localStorage.setItem("country", data.country_id);
}

// Add a click event listener to the submit button
submitButton.addEventListener("click", handleClick);
