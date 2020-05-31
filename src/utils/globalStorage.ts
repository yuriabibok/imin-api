const globalStorage = {
  userId: '',
};

export const setGlobalProp = (name, value): void => {
  globalStorage[name] = value;
};

export const getGlobalProp = (name): string => {
  return globalStorage[name];
};
