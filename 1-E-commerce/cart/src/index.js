import faker from 'faker';

const cartText = `<div>you have ${faker.random.number()} in your cart </div>`;
document.querySelector('#cart-div').innerHTML = cartText;
