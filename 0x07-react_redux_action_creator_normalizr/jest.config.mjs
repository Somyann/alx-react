export const transform = {
  '^.+\\.jsx?$': 'babel-jest', // or 'ts-jest' if you're using TypeScript
};
export const extensionsToTreatAsEsm = ['.jsx', '.js'];