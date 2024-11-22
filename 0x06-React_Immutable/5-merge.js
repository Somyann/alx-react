import { List, Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  // Convert the objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Deeply merge the maps
  const mergedMap = map1.mergeDeep(map2);

  // Return a List containing the values of the merged map
  return List(mergedMap.valueSeq());
}

// Example Usage
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      },
    },
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      },
    },
  },
};

const result = mergeDeeplyElements(page1, page2).toJS();
console.log(result);

export default mergeDeeplyElements;
