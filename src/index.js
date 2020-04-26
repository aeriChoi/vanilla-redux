import {createStore} from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

number.innerText = 0;

const PLUS = 'plus';
const MINUS = 'minus';

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countReducer);

const countChange = () => {
  number.innerText = countStore.getState();
};

const handlePlus = () => {
  countStore.dispatch({type: PLUS})
};

const handleMinus = () => {
  countStore.dispatch({type: MINUS})
};

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);

countStore.subscribe(countChange);