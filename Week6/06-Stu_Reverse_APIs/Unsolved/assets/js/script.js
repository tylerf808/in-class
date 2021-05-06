var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
$.ajax({ //Calling ajax method with key value pairs
  url: requestUrl, 
  method: 'GET', 
}).then(function (response) { //console logging the response returned form the GET method from the ajax method
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
fetch(requestUrl) //Fetch call to the api
  .then(function (response) {
    return response.json(); //returns a JSON object of the response
  })
  .then(function (data) { //promise that runs a function on the data object the logs the data items
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest(); //Variable that holds a XMLHttpRequest object
xhr.onreadystatechange = function () { //Setting onreadystatechange property of the variable to what the function returns
  if (xhr.readyState === XMLHttpRequest.DONE) { //Execute below code if xhr readState property is set to DONE
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response); //Console log the response property of xhr
  }
};
xhr.open('GET', requestUrl); //Sets the method for response and the url to pass to that method
xhr.send(); //Initiates response method set in above line

// TODO: Comment on the differences on the format of the data that was returned
//