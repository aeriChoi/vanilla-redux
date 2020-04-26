import {createStore} from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

const countReducer = (count = 0, action) => {
  if (action.type === 'plus') {
    return count + 1;
  } else if (action.type === 'minus') {
    return count - 1;
  } else {
    return count;
  }
};

number.innerText = 0;

const countStore = createStore(countReducer);

const countChange = () => {
  number.innerText = countStore.getState();
};

const handlePlus = () => {
  countStore.dispatch({type: 'plus'})
};

const handleMinus = () => {
  countStore.dispatch({type: 'minus'})
};

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);

countStore.subscribe(countChange);