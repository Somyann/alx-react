import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$(document).ready(() => {
    $('body').append('<button id="counter">Click me</button>');
    let count = 0;

    $('#counter').click(() => {
        count++;
        alert(`Button clicked ${count} times`);
    });
});
