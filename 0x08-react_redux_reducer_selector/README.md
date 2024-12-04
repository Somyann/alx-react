Writing Tests
What You'll Learn
Recommended practices for testing apps using Redux
Examples of test configuration and setup
Guiding Principles
The guiding principles for testing Redux logic closely follow that of React Testing Library:

The more your tests resemble the way your software is used, the more confidence they can give you. - Kent C. Dodds

Because most of the Redux code you write are functions, and many of them are pure, they are easy to test without mocking. However, you should consider whether each piece of your Redux code needs its own dedicated tests. In the majority of scenarios, the end-user does not know, and does not care whether Redux is used within the application at all. As such, the Redux code can be treated as an implementation detail of the app, without requiring explicit tests for the Redux code in many circumstances.

Our general advice for testing an app using Redux is:

Prefer writing integration tests with everything working together. For a React app using Redux, render a <Provider> with a real store instance wrapping the components being tested. Interactions with the page being tested should use real Redux logic, with API calls mocked out so app code doesn't have to change, and assert that the UI is updated appropriately.
If needed, use basic unit tests for pure functions such as particularly complex reducers or selectors. However, in many cases, these are just implementation details that are covered by integration tests instead.
Do not try to mock selector functions or the React-Redux hooks! Mocking imports from libraries is fragile, and doesn't give you confidence that your actual app code is working.