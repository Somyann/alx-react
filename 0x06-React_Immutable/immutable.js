import accessImmutableObject from './2-nested';
import { Map } from 'immutable';


const data = {
  name: {
    first: "Guillaume",
    last: "Salva",
  },
  details: new Map([
    ['age', 30],
    ['country', 'France']
  ])
};

// Testing the function
console.log(accessImmutableObject(data, ['name', 'first'])); // Output: "Guillaume"
console.log(accessImmutableObject(data, ['details', 'age'])); // Output: 30
console.log(accessImmutableObject(data, ['details', 'nonexistent'])); // Output: undefined
console.log(accessImmutableObject(data, ['name', 'middle'])); // Output: undefined