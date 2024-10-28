import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css'; // Import the CSS file

let count = 0;  // Initialize the counter

// Function to update the counter and the paragraph element
function updateCounter() {
  count += 1;  // Increment the count by 1
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the click event on the button
$(document).ready(function () {
  $('#logo').css('background-image', 'url(../assets/holberton-logo.jpg)');
  $('body').append('<div id="logo"></div>'); 
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  const debouncedUpdateCounter = debounce(updateCounter, 300);

  $('#clickButton').on('click', debouncedUpdateCounter);
});