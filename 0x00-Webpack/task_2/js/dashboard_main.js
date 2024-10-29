import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css'; // Import the CSS file
let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

function addElements() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
}

$(document).ready(() => {
    addElements();
    const debouncedUpdateCounter = debounce(updateCounter, 500);
    $('button').on('click', debouncedUpdateCounter);
});
