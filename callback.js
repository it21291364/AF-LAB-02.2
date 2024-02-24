//Lab sheet 02
//--------------------------------------
//Question A

// Define the fetchData function
function fetchData(url, callback) {
    // Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // Open the request with the GET method and the url
    xhr.open("GET", url);
    // Send the request
    xhr.send();
    // Add an event listener for when the request is loaded
    xhr.addEventListener("load", function() {
      // Check if the status code is 200 (OK)
      if (xhr.status === 200) {
        // Call the callback function with the response data as the argument
        callback(null, xhr.response);
      } else {
        // Call the callback function with an error as the argument
        callback(new Error(`Request failed: ${xhr.status}`));
      }
    });
  }
  
  // Define the callback function that logs the response data or the error
  function logData(error, data) {
    // Check if there is an error
    if (error) {
      // Log the error to the console
      console.error(error);
    } else {
      // Log the data to the console
      console.log(data);
    }
  }
  
  // Use the fetchData function with the logData function as the callback
  fetchData("https://sliit.lk", logData);

 



  