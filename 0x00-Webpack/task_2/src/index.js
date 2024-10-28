import _ from 'lodash';
import $ from 'jquery';

$(document).ready(() => {
    const message = _.join(['Hello', 'Webpack'], ' ');
    $('body').append(`<p>${message}</p>`);
});
