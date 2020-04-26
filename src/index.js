import {createStore} from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

const countReducer = (state = 0) => {
  return state;
};

const countStore = createStore(countReducer);

console.log(countStore.getState());