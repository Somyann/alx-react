module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom", // Optional if testing browser-related code
};
