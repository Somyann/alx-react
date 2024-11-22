function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => {
    if (acc && (typeof acc === 'object' || acc instanceof Map)) {
      return acc[key] !== undefined ? acc[key] : acc.get ? acc.get(key) : undefined;
    }
    
return undefined;
}, object);

}

module.exports = accessImmutableObject;