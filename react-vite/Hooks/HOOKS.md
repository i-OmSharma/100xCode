# SIDE EFFECT -

In react, the concept of side effects encompasse any operations that reach outside the functional scope of a react component.
These components can affect other components, interact with browser, or perform asynchronous data fetching.
Side Effects are operations that can affect other components or can't be done during rendering, such as data fetching, subscriptions, or manually chnaging the DOM in React Components.

setTimeout,
fetch,
setInterval

# HOOKS -

Hooks allow us to use state and other React features without writing a class.
They enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class components.

- useState - describe the state of your app, whenever state updates.
- useEffect - allow to perform the sideeffect in function components.
-
