
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    render();
};

const decrement = () => {
    counterValue -= 1;
    render();
};
const render = () => ref.htmlValue.textContent = counterValue;
const ref = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  htmlValue: document.querySelector('#value'),
};

 ref.buttonDecrement.addEventListener('click', () => decrement());
 ref.buttonIncrement.addEventListener('click', () => increment());
 


//вариант 2
/*let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const counter = document.querySelector('span')

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;

}
const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;

}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
*/
//==========
 // let value = 0;

// function decremenet() {
//   value -= 1;

//   render();
// }

// function incremenet() {
//   value += 1;

//   render();
// }

// function render() {
//   ref.htmlValue.textContent = value;
// }

// // console.log('value:', value);
// // incremenet();
// // incremenet();
// // incremenet();
// // incremenet();
// // console.log('value:', value);

// // const buttonIncrement = document.querySelector('.decrement');
// // const buttonDecrement = document.querySelector('.increment');
// // const htmlValue = document.querySelector('.value');

// const ref = {
//   buttonDecrement: document.querySelector('.decrement'),
//   buttonIncrement: document.querySelector('.increment'),
//   htmlValue: document.querySelector('.value'),
// };

// ref.buttonDecrement.addEventListener('click', decremenet);
// ref.buttonIncrement.addEventListener('click', incremenet);