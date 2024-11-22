import { List, Map } from 'immutable';

// Function to concatenate two arrays and return a List
function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge two objects and return a List of their values
function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  
  const mergedMap = map1.merge(map2);

  return List(mergedMap.valueSeq());
}


export {mergeElements, concatElements};

