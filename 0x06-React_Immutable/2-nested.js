import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);

  return immutableObject.getIn(array);
}

// Example Usage
const obj = {
  name: {
    first: "Guillaume",
    last: "Salva",
  },
};

console.log(accessImmutableObject(obj, ['name', 'first']));

