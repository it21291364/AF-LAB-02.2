 //----------------------------------------------------------------------------------
  ///Question B

  // Define the fetchData function
  function fetchData(url) {
    // Return a new Promise object
    return new Promise(function(resolve, reject) {
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
          // Resolve the Promise with the response data
          resolve(xhr.response);
        } else {
          // Reject the Promise with an error message
          reject(new Error(`Request failed: ${xhr.status}`));
        }
      });
    });
  }
  
  // Use the fetchData function with a then method and a catch method
  fetchData("https://sliit.lk")
    .then(function(data) {
      // Log the data to the console if the Promise is resolved
      console.log(data);
    })
    .catch(function(error) {
      // Log the error to the console if the Promise is rejected
      console.error(error);
    });
  