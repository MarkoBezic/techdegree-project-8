const cards = document.getElementsByClassName('cards');

//Use fetch to get and display 12 random users from  THE RANDOM USER GENERATOR API
    //Using photos and information that the API provides, you'll display 12 users, along with some basic information:
        //image
        //First and Last Name
        //Email
        //City

const users = fetch('https://fsjs-public-api-backup.herokuapp.com/api/')
    .then(response => response.json())
    .then(data => generateHTML(data));

        //Generate the markup for each profile//
function generateHTML(data){
    data.map( card => {
    cards.innerHTML = `
        <img src=${card.picture.thumbnail}>
        <h3>${card.name.first} ${card.name.last}</h3>
        <p>${card.email}</p>
        <p>${card.location.city}</p>
    `
    });
}


//Create a modal window that will pop up when any part of the user's row is clicked. The following details should display in the modal window:
    //Image
    //Name
    //Email
    //Cell Number
    //Detailed Address, including street name and number, city, state, and postcode
    //Birthdate

//Structure and style the user directory so that it roughly matches the provide mockup
    //Display the users in a grid or table
    //Add a hover state to the employee cards
    //Make sure there's a way to close the modal window

//Extra credit
    //Add a way to filter the directory by name. To do this, you'll need to request a random 
    //user nationality that will only return data in the English alphabet. Note you don't have 
    //to rely on the API to return search results. You'll need to write functionality that 
    //filters results once they're already on the page.
   
    //Add a way to move back and forth between employee detail window when the modal window is open


    //////////Left trying to figure out who to pull the date from the api create objects with only 
    ////the 4 parameters you need. I'm thinking I'll need to sit down and consider the step by step 
    ////of how to add this to my page. Maybe lookc those mock up images too :)